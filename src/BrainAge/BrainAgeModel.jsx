import './brainAge.css';

import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Switch,
    Box,
    InputLabel,
    Select,
    MenuItem,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

import Header from '../Home/Header';

export default function BrainAgeModelPage(props) {
    // true = female
    const [gender, setGender] = React.useState('');
    const handleGenderChange = event => {
        setGender(event.target.value);
    };

    function renderUrl() {
        return 'https://brainage.shinyapps.io/' + gender + '/';
    }

    return (
        <div>
            <style>
                {`
              .custom-nav {
                position: relative;
                margin: 50px auto 0;
                width: 999px;
                height: 50px;
                background: #fafafa !important;
                border-radius: 8px !important;
                box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1) !important;
              }
    
              .custom-nav a {
                font-size: 14px !important;
                color: black !important;
                text-decoration: none !important;
                line-height: 50px !important;
                position: relative;
                z-index: 1;
                display: inline-block;
                width: 333px !important;
                text-align: center !important;
              }
    
              .custom-nav a:link {
                text-decoration: none !important;
              }
    
              .custom-nav a:hover {
                text-decoration: none !important;
                color: black !important;
              }
    
              .custom-nav .animation {
                position: absolute;
                height: 100% !important;
                top: 0 !important;
                z-index: 0;
                background: #659bdf !important;
                border-radius: 8px !important;
                transition: all 0.5s ease 0s !important;
              }
    
              .custom-nav .start-option1,
              .custom-nav a:nth-child(1):hover ~ .animation {
                width: 333px !important;
                left: 0px !important;
              }
    
              .custom-nav .start-option2,
              .custom-nav a:nth-child(2):hover ~ .animation {
                width: 333px !important;
                left: 333px !important;
              }
    
              .custom-nav .start-option3,
              .custom-nav a:nth-child(3):hover ~ .animation {
                width: 333px !important;
                left: 666px !important;
              }
            `}
            </style>
            <sections>
                <Header></Header>
                <nav className="custom-nav">
                    <Link to="/brainAge">
                        <span>Generate Developmental BrainAGE for your sample</span>
                    </Link>
                    <Link to="/brainAge2">
                        <span>Generate BrainAGE for your sample</span>
                    </Link>
                    <Link to="/brainAge3">
                        <span>Generate Network-BrainAGE for your sample</span>
                    </Link>
                    <div className="animation start-option1"></div>
                </nav>

                <Grid
                    container
                    spacing={3}
                    style={{ alignItems: 'center', marginTop: '0.2rem' }}
                >
                    <Grid item xs={12} md={1}></Grid>

                    <Grid item xs={12} md={1} style={{ marginLeft: '30px' }}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="MM-label">Select Sex</InputLabel>
                                <Select
                                    labelId="MM-label"
                                    id="MM-select"
                                    value={gender}
                                    label="2-10"
                                    onChange={handleGenderChange}
                                >
                                    <MenuItem value={'female'}>Female</MenuItem>
                                    <MenuItem value={'male'}>Male</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                </Grid>

                <Grid container spacing={3} style={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <div style={{ alignItems: 'center' }}>
                            {gender != '' && (
                                <Iframe
                                    url={renderUrl()}
                                    width="100%"
                                    height="1000px"
                                ></Iframe>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={1}></Grid>
                </Grid>
            </sections>
        </div>
    );
}
