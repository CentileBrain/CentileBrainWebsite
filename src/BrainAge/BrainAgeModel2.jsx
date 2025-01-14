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

export default function BrainAgeModel2Page(props) {
    // true = female
    const [gender, setGender] = React.useState('');
    const handleGenderChange = event => {
        setGender(event.target.value);
    };
    const [age, setAge] = React.useState('');
    const handleAgeChange = event => {
        setAge(event.target.value);
    };

    function renderUrl() {
        return 'https://cb-brainage.shinyapps.io/brainAGE-' + gender + '-' + age;
        // if (gender == 'female') {
        //     var ageInt = parseInt(age);
        //     if (ageInt < 6) {
        //         return (
        //             'https://brainage-female.shinyapps.io/brainage_female_decade' +
        //             age +
        //             '/'
        //         );
        //     }
        //     return (
        //         'https://brainage-female2.shinyapps.io/brainage_female_decade' +
        //         age +
        //         '/'
        //     );
        // }
        // if (age == '1' || age == '2' || age == '3') {
        //     return 'https://brainage.shinyapps.io/brainage_male_decade' + age + '/';
        // }
        // if (age == '9') {
        //     return 'https://brainage-male2.shinyapps.io/brainage_male_decade9/';
        // }
        // return 'https://brainage-male.shinyapps.io/brainage_male_decade' + age + '/';
    }

    return (
        <div>
            <style>
            {`
              .custom-nav {
                position: relative;
                margin: 50px auto 0;
                width: 1200px;
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
                width: 400px !important;
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
                width: 400px !important;
                left: 0px !important;
              }
    
              .custom-nav .start-option2,
              .custom-nav a:nth-child(2):hover ~ .animation {
                width: 400px !important;
                left: 400px !important;
              }
    
              .custom-nav .start-option3,
              .custom-nav a:nth-child(3):hover ~ .animation {
                width: 400px !important;
                left: 800px !important;
              }
            `}
            </style>
            <sections>
                <Header></Header>
                <nav className="custom-nav">
                    <Link to="/brainAge_developmental">
                        <span>Generate Developmental Global-BrainAGE for your sample</span>
                    </Link>
                    <Link to="/brainAge_global">
                        <span>Generate Global-BrainAGE for your sample</span>
                    </Link>
                    <Link to="/brainAge_network">
                        <span>Generate Network-BrainAGE for your sample</span>
                    </Link>
                    <div className="animation start-option2"></div>
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

                    <Grid item xs={12} md={1} style={{ marginLeft: '30px' }}>
                        <Box sx={{ minWidth: 150 }}>
                            <FormControl fullWidth>
                                <InputLabel id="MM-label">Select Age</InputLabel>
                                <Select
                                    labelId="MM-label"
                                    id="MM-select"
                                    value={age}
                                    label="2-10"
                                    onChange={handleAgeChange}
                                >
                                    <MenuItem value={'1234'}>
                                        5&le;age&le;40 years
                                    </MenuItem>
                                    <MenuItem value={'56789'}>
                                        40&lt;age&le;90 years
                                    </MenuItem>

                                    {/* <MenuItem value={'1'}>5&le;age&le;10</MenuItem>
                                <MenuItem value={'2'}>10&lt;age&le;20</MenuItem>
                                <MenuItem value={'3'}>20&lt;age&le;30</MenuItem>
                                <MenuItem value={'4'}>30&lt;age&le;40</MenuItem>
                                <MenuItem value={'5'}>40&lt;age&le;50</MenuItem>
                                <MenuItem value={'6'}>50&lt;age&le;60</MenuItem>
                                <MenuItem value={'7'}>60&lt;age&le;70</MenuItem>
                                <MenuItem value={'8'}>70&lt;age&le;80</MenuItem>
                                <MenuItem value={'9'}>80&lt;age&le;90</MenuItem> */}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container spacing={3} style={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={1}></Grid>
                    <Grid item xs={12} md={10}>
                        <div style={{ alignItems: 'center' }}>
                            {gender != '' && age != '' && (
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
