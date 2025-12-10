import './explore.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Home/Header';
import Graphs from './Graphs';

import {
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    Grid,
    ThemeProvider,
    createTheme,
    Paper,
    CircularProgress
} from '@material-ui/core';

// PREMIUM THEME (Fixed Switch & Inputs)
const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' } },
    shape: { borderRadius: 16 },
    overrides: {
        // 1. ROBUST SWITCH STYLE (iOS style)
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        backgroundColor: '#001529',
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            thumb: {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2)',
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#e0e0e0',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
        },
        // 2. INPUT STYLES
        MuiOutlinedInput: {
            root: {
                backgroundColor: '#f9f9f9',
                '&:hover': { backgroundColor: '#fff' },
                '&.Mui-focused': { backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: 'transparent' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#001529' },
            },
        },
        MuiSelect: {
            select: { textAlign: 'center', paddingRight: '32px !important', paddingLeft: '12px', '&:focus': { backgroundColor: 'transparent' } },
            icon: { color: '#888', right: '12px' },
        },
        MuiInputLabel: {
            root: {
                width: '100%', textAlign: 'center', color: '#888',
                '&.Mui-focused': { color: '#001529' },
            },
        },
    },
});

export default function ExplorePage2(props) {
    const location = useLocation();
    const [ready, setReady] = useState(false);

    const [gender, setGender] = React.useState('');
    const [morphometric, setMorphometric] = React.useState('');
    const [volumes, setVolumes] = React.useState('');
    const [thickness, setThickness] = React.useState('');
    const [area, setArea] = React.useState('');
    const [MFPCurve, setMFPCurve] = React.useState(false);

    const handleCurveChange = () => setMFPCurve(!MFPCurve);

    // FIX LOADING: Wait 300ms to ensure the spinner is seen and transition is smooth
    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <ThemeProvider theme={premiumTheme}>
            <div className="explore-root">
                <Header />

                <div className="explore-nav-container">
                    <nav className="explore-nav">
                        <Link to="/explore" className={`explore-nav-link ${location.pathname === '/explore' ? 'active' : ''}`}>
                            CentileBrain Data Vault
                        </Link>
                        <Link to="/explore2" className={`explore-nav-link ${location.pathname === '/explore2' ? 'active' : ''}`}>
                            Visualize Curves
                        </Link>
                    </nav>
                </div>

                {/* LOADING STATE */}
                {!ready ? (
                    <div style={{ 
                        height: '60vh', 
                        width: '100%',
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>
                        <CircularProgress size={50} style={{ color: '#001529', marginBottom: '20px' }} />
                        <span style={{ color: '#888', fontWeight: 500 }}>Loading Visualization...</span>
                    </div>
                ) : (
                    <div className="page-fade-in" style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 24px' }}>
                        
                        {/* CONTROLS */}
                        <div className="card-slide-up delay-100">
                            <Paper elevation={0} className="polished-card" style={{ marginBottom: '30px', padding: '40px 30px' }}>
                                <Grid container spacing={4} alignItems="center" justifyContent="center">
                                    
                                    <Grid item xs={12} md={3}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Select Sex</InputLabel>
                                            <Select value={gender} onChange={(e) => setGender(e.target.value)} label="Select Sex">
                                                <MenuItem value={'female'}>Female</MenuItem>
                                                <MenuItem value={'male'}>Male</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={3}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Morphometric Measure</InputLabel>
                                            <Select value={morphometric} onChange={(e) => setMorphometric(e.target.value)} label="Morphometric Measure">
                                                <MenuItem value={'volumes'}>Regional Subcortical Volumes</MenuItem>
                                                <MenuItem value={'thickness'}>Regional Cortical Thickness</MenuItem>
                                                <MenuItem value={'area'}>Regional Cortical Area</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <FormControl fullWidth variant="outlined">
                                            <InputLabel>Select Region</InputLabel>
                                            <Select 
                                                value={morphometric === 'volumes' ? volumes : morphometric === 'thickness' ? thickness : area} 
                                                onChange={(e) => {
                                                    if (morphometric === 'volumes') setVolumes(e.target.value);
                                                    else if (morphometric === 'thickness') setThickness(e.target.value);
                                                    else setArea(e.target.value);
                                                }}
                                                label="Select Region"
                                                disabled={!morphometric} 
                                            >
                                                {/* ITEMS */}
                                                {morphometric === 'volumes' && [
                                                    <MenuItem key="thalamus" value="thalamus">Thalamus</MenuItem>,
                                                    <MenuItem key="caudate" value="caudate">Caudate</MenuItem>,
                                                    <MenuItem key="putamen" value="putamen">Putamen</MenuItem>,
                                                    <MenuItem key="pallidum" value="pallidum">Pallidum</MenuItem>,
                                                    <MenuItem key="hippocampus" value="hippocampus">Hippocampus</MenuItem>,
                                                    <MenuItem key="amygdala" value="amygdala">Amygdala</MenuItem>,
                                                    <MenuItem key="accumbens" value="nucleusaccumbens">Nucleus Accumbens</MenuItem>
                                                ]}
                                                {(morphometric === 'thickness' || morphometric === 'area') && [
                                                    <MenuItem key="1" value="1">Banks of the Superior Temporal Sulcus</MenuItem>,
                                                    <MenuItem key="2" value="2">Caudal Anterior Cingulate Cortex</MenuItem>,
                                                    <MenuItem key="3" value="3">Caudal Middle Frontal Cortex</MenuItem>,
                                                    <MenuItem key="4" value="4">Cuneus</MenuItem>,
                                                    <MenuItem key="34" value="34">Insula</MenuItem>
                                                    // ... add others as needed
                                                ]}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    <Grid item xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                        <FormControl component="fieldset">
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Switch checked={MFPCurve} onChange={handleCurveChange} color="primary" />}
                                                    label={<span style={{ fontWeight: 600, color: '#595959', fontSize: '0.85rem' }}>{MFPCurve ? "MFP Regression" : "Centile Curves"}</span>}
                                                    labelPlacement="bottom"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </div>

                        {/* GRAPHS */}
                        <div className="card-fade-only delay-200">
                            <div className="polished-card" style={{ padding: '40px 20px', minHeight: '520px' }}>
                                <Graphs
                                    gender={gender}
                                    value={volumes}
                                    thickness={thickness}
                                    area={area}
                                    MFPCurve={MFPCurve}
                                    morphometric={morphometric}
                                    hidden={!morphometric}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </ThemeProvider>
    );
}