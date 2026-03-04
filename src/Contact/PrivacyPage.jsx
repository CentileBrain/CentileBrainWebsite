/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Header from '../Home/Header';

// Import explore styles for consistent background and card effects
import '../Explore/explore.css';

const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' } },
    shape: { borderRadius: 16 },
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }
});

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: '1000px', // Expanded from 800px to match FaqPage
        margin: '0 auto',
        padding: '40px 24px 80px 24px',
    },
    contentBox: {
        padding: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
    },
    pageTitle: {
        fontWeight: 700,
        color: '#001529',
        marginBottom: theme.spacing(3),
        fontSize: '2.25rem',
        lineHeight: 1.2,
    },
    sectionTitle: {
        fontWeight: 600,
        color: '#001529',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(2),
        fontSize: '1.5rem', // Matches the FAQ question size
    },
    paragraph: {
        color: '#595959',
        lineHeight: 1.8, // Increased to match the 1.8 line height of FAQ answers
        marginBottom: theme.spacing(2),
        fontSize: '1.15rem', // Increased from 1rem to match FAQ answers
    },
    list: {
        paddingLeft: theme.spacing(3),
        marginBottom: theme.spacing(3),
        color: '#595959',
    },
    listItem: {
        marginBottom: theme.spacing(1),
        lineHeight: 1.8, // Increased for readability
        fontSize: '1.15rem', // Increased from 1rem
    },
    divider: {
        margin: theme.spacing(6, 0, 4, 0),
        backgroundColor: 'rgba(0, 0, 0, 0.08)',
    },
    lastUpdate: {
        color: '#8c8c8c',
        fontSize: '0.95rem', // Bumped up slightly to match the new scale
        fontStyle: 'italic',
    }
}));

export default function PrivacyPage(props) {
    const classes = useStyles();
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={premiumTheme}>
            <div className="explore-root">
                <Header />

                <div className={classes.container}>
                    
                    {/* Header Section (Fades in first) */}
                    <div className={`page-fade-in ${ready ? '' : 'hidden'}`} style={{ textAlign: 'center', marginBottom: '32px' }}>
                        <Typography variant="h6" style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem', marginBottom: '8px' }}>
                            Legal
                        </Typography>
                        <Typography variant="h1" className={classes.pageTitle}>
                            Privacy Notice
                        </Typography>
                    </div>

                    {/* Content Card (Slides up) */}
                    <div className={`polished-card card-slide-up delay-100 ${ready ? '' : 'hidden'} ${classes.contentBox}`}>
                        
                        <Typography variant="body1" className={classes.paragraph}>
                            This privacy notice aims to inform you about the information collected when contacting us via the contact form provided by the CentileBrain website.
                        </Typography>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            Information collected via the Contact Form
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            We will collect any information you enter directly on the contact form. This will include your first and last name and your email and any text you enter in the contact form.
                        </Typography>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            How And On What Grounds We Use The Information
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            We will use the information we collect via our website:
                        </Typography>
                        <ul className={classes.list}>
                            <li className={classes.listItem}>To respond to the query submitted by you in the contact form;</li>
                            <li className={classes.listItem}>To send you information about publications and events if you have subscribed to our newsletter option;</li>
                            <li className={classes.listItem}>To administer our website, and for internal operations such as troubleshooting and contact data analysis;</li>
                            <li className={classes.listItem}>To improve our website to ensure that content is presented in the most effective manner for you and for your computer;</li>
                            <li className={classes.listItem}>As part of our efforts to keep our website secure. Our use of your Personal Information may be based on our legitimate interest to ensure network, information security and website performance improvement;</li>
                            <li className={classes.listItem}>We do not share or disclose any information to third parties.</li>
                        </ul>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            Duration of storage of information
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            Your information will be stored for different periods of time depending on the category. In principle, personal information and the content of the contact form will be deleted automatically based on specific schedules. If you have opted to subscribe to the newsletter, your name and email will be stored for as long as you remain a subscriber. Finally, we might further retain information for practices based on our legitimate interest or legal purposes, such as network improvement, fraud prevention, or enforcing our legal rights.
                        </Typography>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            Your Privacy Rights
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            You may decide not to use the contact form provided. Have the option of opting-in to your mailing list at any point and for those already subscribed you have the option of opting out at any point. When you opt-out the information stored will be deleted at the next scheduled update.
                        </Typography>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            International Data Transfers
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            Personal Information you submit on CentileBrain and related supporting services may be sent to the United States and processed there or in other countries, on our service providers’ cloud servers.
                        </Typography>

                        <Typography variant="h2" className={classes.sectionTitle}>
                            Changes to the Privacy Notice
                        </Typography>
                        <Typography variant="body1" className={classes.paragraph}>
                            We may change this privacy notice in the context of website or service updates or when required by law. We will alert you to material changes by, for example, placing a notice on our Website when we are required to do so by applicable law. Otherwise, you are responsible for periodically reviewing this Privacy Notice. You can see when this Privacy Notice was last updated by checking the date at the top of this page.
                        </Typography>

                        <Divider className={classes.divider} />

                        <Typography variant="body2" className={classes.lastUpdate}>
                            Last Update: September 7th, 2021
                        </Typography>

                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}