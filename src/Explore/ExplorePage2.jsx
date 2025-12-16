import './explore.css';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Home/Header';
import Graphs from './Graphs';

import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Grid,
    ThemeProvider,
    createTheme,
    Paper,
    CircularProgress
} from '@material-ui/core';

// PREMIUM THEME
const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' } },
    shape: { borderRadius: 16 },
    overrides: {
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
    
    // false = Centile Curves, true = MFP Regression
    const [MFPCurve, setMFPCurve] = React.useState(false);

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

                                    <Grid item xs={12} md={3}>
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
                                                ]}
                                            </Select>
                                        </FormControl>
                                    </Grid>

                                    {/* 3. TWO SEPARATE TOGGLE SWITCHES */}
                                    <Grid item xs={12} md={3}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                                            
                                            {/* Switch 1: Centile Curves */}
                                            <div className="toggle-wrapper">
                                                <label className="custom-switch">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={!MFPCurve} // Active if MFPCurve is false
                                                        onChange={() => setMFPCurve(false)} 
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                                <span className="toggle-label">Centile Curves</span>
                                            </div>

                                            {/* Switch 2: MFP Regression */}
                                            <div className="toggle-wrapper">
                                                <label className="custom-switch">
                                                    <input 
                                                        type="checkbox" 
                                                        checked={MFPCurve} // Active if MFPCurve is true
                                                        onChange={() => setMFPCurve(true)} 
                                                    />
                                                    <span className="slider round"></span>
                                                </label>
                                                <span className="toggle-label">MFP Regression</span>
                                            </div>

                                        </div>
                                    </Grid>

                                </Grid>
                            </Paper>
                        </div>

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