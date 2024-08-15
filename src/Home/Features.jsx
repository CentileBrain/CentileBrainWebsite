import './feature.css';

import Grid from '@material-ui/core/Grid';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <div style={{ paddingLeft: '4rem', paddingRight: '4rem' }}>
            <Grid container spacing={10} alignItems={'stretch'}>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/explore">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/explore2.svg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Explore the CentileBrain Dataset</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/model">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1251018502%20Upload.svg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Use CentileBrain to Generate Estimates</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/model2">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1155106799_Model.svg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>The CentileBrain Model</h5>
                    </Grid>
                </Grid>
            </Grid>

            

            <Grid container spacing={10} alignItems={'stretch'}>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/brainAGE">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/Global+BrainAGE.png"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Global BrainAGE</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/brainAGE3">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/Network+BrainAGE.jpg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Network BrainAGE</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/eHarmonize">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/eharmonize.JPG"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>eHarmonize</h5>
                    </Grid>
                </Grid>
                
                
            </Grid>
            
            <Grid container spacing={10} alignItems={'stretch'}>
                {/* <Grid item xs={12} md={2}>
                    <Grid item xs={12}></Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    ></Grid>
                </Grid> */}
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/faq">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/FAQ.png"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Frequently Asked Questions</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/team">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-966858736_Team.svg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>Core Team</h5>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        <Link to="/publications">
                            <img
                                src="https://centilebrainwebsiteimage.s3.amazonaws.com/iStock-1323841513%20publications.svg"
                                width="100%"
                            />
                        </Link>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    >
                        <h5>CentileBrain Publications</h5>
                    </Grid>
                </Grid>
                {/* <Grid item xs={12} md={2}>
                    <Grid item xs={12}></Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ paddingTop: '1rem', textAlign: 'center' }}
                    ></Grid>
                </Grid> */}
            </Grid>
        </div>
    );
}
