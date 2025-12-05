import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '4rem 2rem',
        maxWidth: '1280px',
        margin: '0 auto',
    },
    card: {
        height: '100%',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
        },
    },
    media: {
        height: 200,
        backgroundSize: 'contain',
        margin: '1rem',
    },
    title: {
        textAlign: 'center',
        fontWeight: 600,
        color: '#001529',
    },
});

const featureData = [
    { title: 'Explore Dataset', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/explore2.svg', link: '/explore' },
    { title: 'Generate Estimates', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1251018502%20Upload.svg', link: '/model' },
    { title: 'CentileBrain Model', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1155106799_Model.svg', link: '/model2' },
    { title: 'Global BrainAGE', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/Global+BrainAGE.png', link: '/brainAge_global' },
    { title: 'Network BrainAGE', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/Network+BrainAGE.jpg', link: '/brainAge_network' },
    { title: 'eHarmonize', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/eharmonize.JPG', link: '/eHarmonize' },
    { title: 'FAQ', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/FAQ.png', link: '/faq' },
    { title: 'Core Team', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-966858736_Team.svg', link: '/team' },
    { title: 'Publications', img: 'https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1323841513%20publications.svg', link: '/publications' },
];

export default function Features() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={4} alignItems="stretch">
                {featureData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Link to={item.link} style={{ textDecoration: 'none' }}>
                            <Card className={classes.card} elevation={2}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={item.img}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}