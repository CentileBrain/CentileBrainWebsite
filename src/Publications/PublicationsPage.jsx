import './PublicationsPage.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from '../Home/Header';

// Material UI Imports
import {
    ThemeProvider,
    createTheme,
    Typography,
    Box,
    Grid,
    Button,
    Chip
} from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import LaunchIcon from '@material-ui/icons/Launch';

// 1. Define the Premium Theme
const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' } },
    shape: { borderRadius: 16 },
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }
});

export default function PublicationsPage(props) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const publications = [
        {
            info: 'Frangou S, Modabbernia A, Williams SCR, et al. Cortical thickness across the lifespan: Data from 17,075 healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25364. doi:10.1002/hbm.25364',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33595143/',
            id: uuid(),
        },
        {
            info: 'Dima D, Modabbernia A, Papachristou E, et al. Subcortical volumes across the lifespan: Data from 18,605 healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25320. doi:10.1002/hbm.25320',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33570244/',
            id: uuid(),
        },
        {
            info: 'Wierenga LM, Doucet GE, Dima D, et al. Greater male than female variability in regional brain structure across the lifespan [published online ahead of print, 2020 Oct 12]. Hum Brain Mapp. 2020;10.1002/hbm.25204. doi:10.1002/hbm.25204',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33044802/',
            id: uuid(),
        },
        {
            info: 'Modabbernia A, Whalley HC, Glahn DC, Thompson PM, Kahn RS, Frangou S. Systematic evaluation of machine learning algorithms for neuroanatomically-based age prediction in youth. Hum Brain Mapp. 2022; doi:10.1002/hbm.26010',
            link: 'https://pubmed.ncbi.nlm.nih.gov/35852028/',
            id: uuid(),
        },
        {
            info: 'Sanford N, Ge R, Antoniades M, Modabbernia A, Haas SS, Whalley HC, Galea L, Popescu SG, Cole JH, Frangou S. Sex differences in predictors and regional patterns of brain age gap estimates. Hum Brain Mapp. 2022; doi: 10.1002/hbm.25983',
            link: 'https://pubmed.ncbi.nlm.nih.gov/35790053/',
            id: uuid(),
        },
        {
            info: 'Ge R, Yu Y, Qi Y, Haas S, etc, Thompson P, Frangou S. Normative Modeling of Brain Morphometry Across the Lifespan using CentileBrain: Algorithm Benchmarking and Model Optimization. Lancet Digit Health. 2024; doi: 10.1016/S2589-7500(23)00250-9',
            link: 'https://doi.org/10.1016/S2589-7500(23)00250-9',
            id: uuid(),
        },
        {
            info: 'Haas S, Ge R, etc, Frangou S. Normative modeling of brain morphometry in Clinical High-Risk for Psychosis. JAMA Psychiatry. 2024; doi: 10.1001/jamapsychiatry.2023.3850',
            link: 'https://www.jamanetwork.com/journals/jamapsychiatry/fullarticle/2810624',
            id: uuid(),
        },
        {
            info: 'Yu Y, Cui H, etc, Thompson P, Frangou S, Ge R. Brain-Age Prediction: Systematic Evaluation of Site Effects, and Sample Age Range and Size. Human Brain Mapping. 2024; doi: 10.1002/hbm.26768',
            link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.26768',
            id: uuid(),
        },
        {
            info: 'Alyssa H. Zhu, etc, Paul M. Thompson, Neda Jahanshad, Alzheimer’s Disease Neuroimaging Initiative. Lifespan reference curves for harmonizing multi-site regional brain white matter metrics from diffusion MRI. 2024; doi: 10.1101/2024.02.22.581646',
            link: 'https://www.biorxiv.org/content/10.1101/2024.02.22.581646',
            id: uuid(),
        },
    ];

    return (
        <ThemeProvider theme={premiumTheme}>
            <div className="explore-root">
                <Header />

                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px 24px' }}>
                    
                    {/* Header Section */}
                    <div style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }} className={`page-fade-in ${ready ? '' : 'hidden'}`}>
                        <Typography variant="h4" style={{ fontWeight: 700, color: '#001529' }}>
                            Publications
                        </Typography>
                        <Typography variant="body1" style={{ color: '#595959', marginTop: '10px' }}>
                            Research and findings powered by the CentileBrain initiative
                        </Typography>
                    </div>

                    {/* Card Container */}
                    <div className={`polished-card card-slide-up delay-100 ${ready ? '' : 'hidden'}`} style={{ padding: '0' }}>
                        {publications.map((pub, index) => (
                            <PublicationItem key={pub.id} {...pub} />
                        ))}
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
}

function PublicationItem({ info, link }) {
    return (
        <div className="publication-item">
            <Grid container spacing={3} alignItems="center">
                {/* Icon Column (Optional, adds visual anchor) */}
                <Grid item style={{ display: 'flex', alignItems: 'center' }}>
                    <Box style={{ 
                        backgroundColor: '#f0f5ff', 
                        borderRadius: '50%', 
                        width: '40px', 
                        height: '40px', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        color: '#1890ff' 
                    }}>
                        <DescriptionOutlinedIcon fontSize="small" />
                    </Box>
                </Grid>

                {/* Text Content */}
                <Grid item xs>
                    <Typography variant="body1" className="pub-text">
                        {info}
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                        <Chip 
                            label="Journal Article" 
                            size="small" 
                            style={{ 
                                backgroundColor: '#f5f5f5', 
                                color: '#595959', 
                                fontWeight: 500,
                                fontSize: '0.75rem',
                                height: '24px'
                            }} 
                        />
                    </div>
                </Grid>

                {/* Button Column */}
                <Grid item>
                    <Button
                        variant="outlined"
                        className="pub-button"
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        endIcon={<LaunchIcon style={{ fontSize: '0.9rem' }} />}
                    >
                        View Article
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}