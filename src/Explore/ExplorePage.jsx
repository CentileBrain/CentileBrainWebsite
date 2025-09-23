import './explore.css';

import Grid from '@material-ui/core/Grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';
23808189;

export default function ExplorePage(props) {
    return (
        <sections>
            <Header></Header>
            <nav>
                <Link to="/explore">
                    <span>CentileBrain Data Vault</span>
                </Link>
                <Link to="/explore2">
                    <span>Visualize Regional Age-Related Curves</span>
                </Link>
                <div className="animation start-a"></div>
            </nav>
            <br />
            <br />
            <Grid container spacing={3} alignItems={'center'}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <img
                        src="https://centilebrainwebsiteimage.s3.amazonaws.com/age_distribution_new.jpg"
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} md={5}>
                    <img
                        src="https://centilebrainwebsiteimage.s3.us-east-1.amazonaws.com/CentileBrain_Map_2025%3A09%3A22.jpg"
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>
            <Grid container spacing={3} alignItems={'center'}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <h5>
                        Age and Sex Distribution of the Datasets in the CentileBrain
                        Data Vault
                    </h5>
                </Grid>
                <Grid item xs={12} md={5}>
                    <h5>
                        Geographical Distribution of the Datasets Contributing to the
                        CentileBrain Data Vault
                    </h5>
                </Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

            <Grid container spacing={3} alignItems={'center'}>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={5}>
                    <h5>
                        Information on the datasets can be found{' '}
                        <a
                            href="https://docs.google.com/spreadsheets/d/1d-1bfKskhPSkfFnZXA68h9S7Lla6NRVU/edit?usp=sharing&ouid=108618372729677349330&rtpof=true&sd=true"
                            target="_blank"
                            style={{ color: 'black' }}
                        >
                            here
                        </a>
                        .
                    </h5>
                </Grid>
                <Grid item xs={12} md={5}></Grid>
                <Grid item xs={12} md={1}></Grid>
            </Grid>

            <br />
            <br />
            <br />
            <br />
        </sections>
    );
}
