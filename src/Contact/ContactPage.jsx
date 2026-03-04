/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Slide from '@material-ui/core/Slide';
import useAlert from '../hooks/useAlert';
import emailjs from 'emailjs-com';
import AlertMessage from './AlertMessage';
import Header from '../Home/Header';

import '../Explore/explore.css';

const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' }, error: { main: '#f44336' } },
    shape: { borderRadius: 12 },
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }
});

// Smooth slide-up transition for the modal
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        paddingRight: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            paddingRight: 0,
            marginBottom: theme.spacing(6),
        }
    },
    sensorWrapper: {
        perspective: '1500px',
        height: '100%',
        width: '100%',
        minHeight: '550px',
        display: 'flex',
    },
    interactiveImageCard: {
        borderRadius: '24px',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        boxShadow: '0 10px 30px rgba(0, 21, 41, 0.08)',
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: 'transform, box-shadow',
        pointerEvents: 'none', 
        transition: 'box-shadow 0.3s ease', 
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', 
        objectPosition: '100% center', 
    },
    submitButton: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '50px',
        padding: '12px 32px',
        backgroundColor: '#001529',
        color: '#ffffff',
        marginTop: theme.spacing(2),
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#002a52',
            transform: 'scale(1.02)',
        },
        '&:active': {
            transform: 'scale(0.98)',
        }
    },
    privacyLink: {
        fontWeight: 600,
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    
    /* --- SHAKE ANIMATION --- */
    '@keyframes shake': {
        '0%, 100%': { transform: 'translateX(0)' },
        '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-6px)' },
        '20%, 40%, 60%, 80%': { transform: 'translateX(6px)' }
    },
    errorShake: {
        animation: '$shake 0.4s cubic-bezier(.36,.07,.19,.97) both',
    },
    
    /* --- CUSTOM CHECKBOX ANIMATIONS --- */
    customCheckboxRoot: {
        padding: 8,
        '&:hover $customCheckbox': { borderColor: '#001529' }
    },
    customCheckbox: {
        width: 22, height: 22, border: '2px solid #8c8c8c', borderRadius: '6px', backgroundColor: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    },
    customCheckboxError: { borderColor: '#f44336 !important', backgroundColor: 'rgba(244, 67, 54, 0.05)' },
    customCheckboxChecked: { backgroundColor: '#001529', borderColor: '#001529', animation: '$checkboxPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' },
    checkSvg: { width: 16, height: 16, animation: '$checkPopIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.05s both' },
    '@keyframes checkboxPop': { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(0.85)' }, '100%': { transform: 'scale(1)' } },
    '@keyframes checkPopIn': { '0%': { transform: 'scale(0)', opacity: 0 }, '100%': { transform: 'scale(1)', opacity: 1 } },

    /* --- PRIVACY POP-UP STYLES --- */
    dialogPaper: {
        borderRadius: '20px',
        padding: theme.spacing(1),
        boxShadow: '0 25px 50px rgba(0, 21, 41, 0.15)',
    },
    dialogTitle: {
        fontWeight: 700,
        color: '#001529',
        fontSize: '1.75rem',
        paddingTop: theme.spacing(2),
    },
    dialogSectionTitle: {
        fontWeight: 600,
        color: '#001529',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
        fontSize: '1.15rem',
    },
    dialogText: {
        color: '#595959',
        lineHeight: 1.7,
        fontSize: '1rem',
    },
    dialogList: {
        paddingLeft: theme.spacing(3),
        color: '#595959',
        lineHeight: 1.7,
        fontSize: '1rem',
    },
    closeButton: {
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: '50px',
        padding: '8px 24px',
        color: '#595959',
        borderColor: '#d9d9d9',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
        }
    }
}));

export default function ContactPage(props) {
    const classes = useStyles();
    const alertHook = useAlert();
    const [checked, setChecked] = useState(false);
    const [ready, setReady] = useState(false);
    
    // State to control the Privacy Pop-up
    const [privacyOpen, setPrivacyOpen] = useState(false);
    
    const [errors, setErrors] = useState({
        firstName: false, lastName: false, email: false, message: false, terms: false
    });

    const [shakeTriggers, setShakeTriggers] = useState(false);
    
    const wrapperRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => setReady(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const content = {
        'header': 'Contact Us',
        'description': "We're here to answer questions and discuss your experience.",
        'terms': 'I agree to the terms of use and ',
        'primary-action': 'Submit',
        'image': 'https://centilebrainwebsiteimage.s3.amazonaws.com/contact.png', 
        ...props.content,
    };

    const onSubmit = e => {
        e.preventDefault(); 
        const form = e.target;
        
        const newErrors = {
            firstName: !form.firstName.value.trim(),
            lastName: !form.lastName.value.trim(),
            email: !form.email.value.trim(),
            message: !form.message.value.trim(),
            terms: !checked
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(err => err === true);

        if (hasErrors) {
            setShakeTriggers(false);
            setTimeout(() => setShakeTriggers(true), 10);
            alertHook.switchToFailure('Please fill in all highlighted required fields.');
            
            const firstErrorField = Object.keys(newErrors).find(key => newErrors[key]);
            if (firstErrorField) {
                const fieldElement = document.getElementsByName(firstErrorField)[0];
                if (fieldElement) {
                    fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    fieldElement.focus({ preventScroll: true });
                }
            }
            return; 
        }

        emailjs.sendForm('service_4knc8gc', 'template_oo5l20m', form, 'rQKaZXm2IjTZ9CKn3')
            .then(() => alertHook.switchToSuccess('Email sent successfully.'))
            .catch(() => alertHook.switchToFailure('Failed to send email.'));
            
        form.reset();
        setChecked(false);
    };

    const handleInputChange = (fieldName) => {
        if (errors[fieldName]) {
            setErrors({ ...errors, [fieldName]: false });
        }
    };

    const handleMouseEnter = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transition = 'transform 0.1s ease-out, box-shadow 0.3s ease';
        cardRef.current.style.boxShadow = '0 25px 50px rgba(0, 21, 41, 0.2)';
    };

    const handleMouseMove = (e) => {
        if (!wrapperRef.current || !cardRef.current) return;
        const rect = wrapperRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;

        cardRef.current.style.transform = `rotateX(${y * -6}deg) rotateY(${x * 6}deg) scale3d(0.99, 0.99, 0.99)`;
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease';
        cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        cardRef.current.style.boxShadow = '0 10px 30px rgba(0, 21, 41, 0.08)';
    };

    return (
        <ThemeProvider theme={premiumTheme}>
            <div className="explore-root">
                <Header />
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px 24px' }}>
                    
                    <div style={{ textAlign: 'center', marginTop: '60px', marginBottom: '60px' }} className={`page-fade-in ${ready ? '' : 'hidden'}`}>
                        <Typography variant="h4" style={{ fontWeight: 700, color: '#001529' }}>
                            {content['header']}
                        </Typography>
                        <Typography variant="body1" style={{ color: '#595959', marginTop: '10px' }}>
                            {content['description']}
                        </Typography>
                    </div>

                    <Grid container spacing={4} alignItems="stretch" className={`card-slide-up delay-100 ${ready ? '' : 'hidden'}`}>
                        
                        {/* LEFT SIDE: Form */}
                        <Grid item xs={12} md={6}>
                            <div className={classes.formContainer}>
                                <form onSubmit={onSubmit} noValidate>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField variant="outlined" fullWidth name="firstName" label="First Name *" error={errors.firstName} className={(errors.firstName && shakeTriggers) ? classes.errorShake : ''} onChange={() => handleInputChange('firstName')} />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField variant="outlined" fullWidth name="lastName" label="Last Name *" error={errors.lastName} className={(errors.lastName && shakeTriggers) ? classes.errorShake : ''} onChange={() => handleInputChange('lastName')} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" fullWidth name="email" label="Email Address *" error={errors.email} className={(errors.email && shakeTriggers) ? classes.errorShake : ''} onChange={() => handleInputChange('email')} />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" fullWidth name="company" label="Company" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField variant="outlined" multiline rows={5} fullWidth name="message" label="Message *" error={errors.message} className={(errors.message && shakeTriggers) ? classes.errorShake : ''} onChange={() => handleInputChange('message')} />
                                        </Grid>
                                        <Grid item xs={12} className={(errors.terms && shakeTriggers) ? classes.errorShake : ''}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox 
                                                        checked={checked} name="terms"
                                                        onChange={(e) => { setChecked(e.target.checked); handleInputChange('terms'); }} 
                                                        className={classes.customCheckboxRoot} disableRipple
                                                        icon={<div className={`${classes.customCheckbox} ${errors.terms ? classes.customCheckboxError : ''}`} />}
                                                        checkedIcon={
                                                            <div className={`${classes.customCheckbox} ${classes.customCheckboxChecked}`}>
                                                                <svg viewBox="0 0 24 24" className={classes.checkSvg}><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="white" /></svg>
                                                            </div>
                                                        }
                                                    />
                                                }
                                                label={
                                                    <Typography variant="body2" style={{ color: errors.terms ? '#f44336' : '#595959', transition: 'color 0.3s ease' }}>
                                                        {content['terms']} 
                                                        {/* Replaced standard Link with an onClick span to open the modal */}
                                                        <span 
                                                            onClick={() => setPrivacyOpen(true)}
                                                            className={classes.privacyLink}
                                                            style={{ color: errors.terms ? '#f44336' : '#001529' }}
                                                        >
                                                            privacy policy
                                                        </span>.
                                                    </Typography>
                                                }
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box mt={1}>
                                        <Button type="submit" variant="contained" disableElevation className={classes.submitButton} fullWidth>
                                            {content['primary-action']}
                                        </Button>
                                    </Box>
                                </form>
                                <Box mt={2}>
                                    <AlertMessage alertHook={alertHook} />
                                </Box>
                            </div>
                        </Grid>

                        {/* RIGHT SIDE: Sensor Wrapper & Visual Card */}
                        <Grid item xs={12} md={6}>
                            <div ref={wrapperRef} className={classes.sensorWrapper} onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                                <div ref={cardRef} className={classes.interactiveImageCard}>
                                    <img className={classes.image} src={content['image']} alt="Contact Us" />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>

                {/* --- PRIVACY POLICY ANIMATED POP-UP --- */}
                <Dialog
                    open={privacyOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => setPrivacyOpen(false)}
                    classes={{ paper: classes.dialogPaper }}
                    maxWidth="md"
                    scroll="paper"
                >
                    <DialogTitle disableTypography>
                        <Typography className={classes.dialogTitle}>Privacy Notice</Typography>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Typography className={classes.dialogText} paragraph>
                            This privacy notice aims to inform you about the information collected when contacting us via the contact form provided by the CentileBrain website.
                        </Typography>
                        
                        <Typography className={classes.dialogSectionTitle}>Information collected via the Contact Form</Typography>
                        <Typography className={classes.dialogText} paragraph>
                            We will collect any information you enter directly on the contact form. This will include your first and last name and your email and any text you enter in the contact form.
                        </Typography>

                        <Typography className={classes.dialogSectionTitle}>How And On What Grounds We Use The Information</Typography>
                        <Typography className={classes.dialogText} paragraph>We will use the information we collect via our website:</Typography>
                        <ul className={classes.dialogList}>
                            <li>To respond to the query submitted by you in the contact form;</li>
                            <li>To send you information about publications and events if you have subscribed to our newsletter option;</li>
                            <li>To administer our website, and for internal operations such as troubleshooting and contact data analysis;</li>
                            <li>To improve our website to ensure that content is presented in the most effective manner for you and for your computer;</li>
                            <li>As part of our efforts to keep our website secure. Our use of your Personal Information may be based on our legitimate interest to ensure network, information security and website performance improvement;</li>
                            <li>We do not share or disclose any information to third parties.</li>
                        </ul>

                        <Typography className={classes.dialogSectionTitle}>Duration of storage of information</Typography>
                        <Typography className={classes.dialogText} paragraph>
                            Your information will be stored for different periods of time depending on the category. In principle, personal information and the content of the contact form will be deleted automatically based on specific schedules. If you have opted to subscribe to the newsletter, your name and email will be stored for as long as you remain a subscriber. Finally, we might further retain information for practices based on our legitimate interest or legal purposes, such as network improvement, fraud prevention, or enforcing our legal rights.
                        </Typography>

                        <Typography className={classes.dialogSectionTitle}>Your Privacy Rights</Typography>
                        <Typography className={classes.dialogText} paragraph>
                            You may decide not to use the contact form provided. Have the option of opting-in to your mailing list at any point and for those already subscribed you have the option of opting out at any point. When you opt-out the information stored will be deleted at the next scheduled update.
                        </Typography>

                        <Typography className={classes.dialogSectionTitle}>International Data Transfers</Typography>
                        <Typography className={classes.dialogText} paragraph>
                            Personal Information you submit on CentileBrain and related supporting services may be sent to the United States and processed there or in other countries, on our service providers’ cloud servers.
                        </Typography>

                        <Typography className={classes.dialogSectionTitle}>Changes to the Privacy Notice</Typography>
                        <Typography className={classes.dialogText} paragraph>
                            We may change this privacy notice in the context of website or service updates or when required by law. We will alert you to material changes by, for example, placing a notice on our Website when we are required to do so by applicable law. Otherwise, you are responsible for periodically reviewing this Privacy Notice. You can see when this Privacy Notice was last updated by checking the date at the top of this page.
                        </Typography>
                    </DialogContent>
                    <DialogActions style={{ padding: '24px' }}>
                        <Button onClick={() => setPrivacyOpen(false)} variant="outlined" className={classes.closeButton}>
                            Close
                        </Button>
                        <Button 
                            onClick={() => { 
                                setChecked(true); // Automatically checks the box!
                                setPrivacyOpen(false); 
                                handleInputChange('terms'); 
                            }} 
                            variant="contained" 
                            disableElevation 
                            className={classes.submitButton} 
                            style={{ marginTop: 0, marginLeft: '12px' }}
                        >
                            I Agree
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>
        </ThemeProvider>
    );
}