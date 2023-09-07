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
        <sections>
            <Header></Header>

            <nav>
                <Link to="/brainAge">
                    <span>Generate Developmental BrainAGE from your sample</span>
                </Link>
                
                <Link to='/brainAge2'><span>Generate BrainAGE for different age groups from your sample</span></Link> 
                
                <div className="animation start-brainAgeModel"></div>
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
    );
}
