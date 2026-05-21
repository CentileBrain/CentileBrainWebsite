import './PublicationsPage.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from '../Home/Header';

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

    // Grouping publications into categories as requested
    const publicationGroups = [
        {
            title: "Foundational CentileBrain Papers",
            items: [
                {
                    info: 'Ge R, Yu Y, New F, et al., Thompson PM, Frangou S. Empirical validation of race-neutral normative brain morphometry models across ethnoracially diverse populations. Proc Natl Acad Sci USA. 2026;123(20):e2521055123. doi: 10.1073/pnas.2521055123',
                    link: 'https://www.pnas.org/doi/10.1073/pnas.2521055123',
                    id: uuid(),
                },
                {
                    info: 'Zhu AH, et al., Thompson PM, Jahanshad N. Alzheimer’s Disease Neuroimaging Initiative. Lifespan reference curves for harmonizing multi-site regional brain white matter metrics from diffusion MRI. Sci Data. 2025;12:748. doi: 10.1038/s41597-025-05028-2',
                    link: 'https://www.nature.com/articles/s41597-025-05028-2',
                    id: uuid(),
                },
                {
                    info: 'Ge R, Yu Y, Qi Y, Haas S, et al., Thompson PM, Frangou S. Normative Modeling of Brain Morphometry Across the Lifespan using CentileBrain: Algorithm Benchmarking and Model Optimization. Lancet Digit Health. 2024;6(3):e211-e221. doi: 10.1016/S2589-7500(23)00250-9',
                    link: 'https://doi.org/10.1016/S2589-7500(23)00250-9',
                    id: uuid(),
                },
                {
                    info: 'Yu Y, Cui H, et al., Thompson PM, Frangou S, Ge R. Brain-Age Prediction: Systematic Evaluation of Site Effects, and Sample Age Range and Size. Human Brain Mapping. 2024;45(10):e26768. doi: 10.1002/hbm.26768',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.26768',
                    id: uuid(),
                },
                {
                    info: 'Modabbernia A, Whalley HC, Glahn DC, Thompson PM, Kahn RS, Frangou S. Systematic evaluation of machine learning algorithms for neuroanatomically-based age prediction in youth. Hum Brain Mapp. 2022;43(17):5126-5140. doi: 10.1002/hbm.26010',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.26010',
                    id: uuid(),
                },
                {
                    info: 'Wierenga LM, Doucet GE, Dima D, et al., Frangou S, Tamnes CK. Greater male than female variability in regional brain structure across the lifespan [published online ahead of print, 2020 Oct 12]. Hum Brain Mapp. 2022;43(1):470-499. doi: 10.1002/hbm.25204',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.25204',
                    id: uuid(),
                },
                {
                    info: 'Frangou S, Modabbernia A, Williams SCR, et al., Thompson PM, Dima D. Cortical thickness across the lifespan: Data from 17,075 healthy individuals aged 3-90 years. Hum Brain Mapp. 2022;43(1):431-451. doi: 10.1002/hbm.25364',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.25364',
                    id: uuid(),
                },
                {
                    info: 'Dima D, Modabbernia A, Papachristou E, et al., Thompson PM, Frangou S.  Subcortical volumes across the lifespan: Data from 18,605 healthy individuals aged 3-90 years. Hum Brain Mapp. 2022;43(1):452-469. doi: 10.1002/hbm.25320',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.25320',
                    id: uuid(),
                }
            ]
        },
        {
            title: "Applications to clinical groups and population neuroscience",
            items: [
                {
                    info: 'Wang HR, et al., Frangou S, Thompson PM, ... , Ho TC. Childhood Maltreatment and Deviations from Normative Brain Structure: A Mega-Analysis of 3,711 Individuals from the ENIGMA MDD and ENIGMA PTSD Working Groups. Biological Psychiatry. 2026. doi: 10.1016/j.biopsych.2026.02.016',
                    link: 'https://doi.org/10.1016/j.biopsych.2026.02.016',
                    id: uuid(),
                },
                {
                    info: 'Bernardoni F, Arold D, Schoppik L, Bahnsen K, Ge R, et al., Frangou S, King JA, Thompson PM, Ehrlich S. Brain morphology in anorexia nervosa and its subtypes: A multi-cohort study of individual participant data. PLoS Med. 2026;23(5):e1004809. doi: 10.1371/journal.pmed.1004809',
                    link: 'https://doi.org/10.1371/journal.pmed.1004809',
                    id: uuid(),
                },
                {
                    info: 'Yu K, Ge R, Yu Y, Haas S, Sanford N, Yatham LN, Frangou S, Chakrabarty T. Individual-level brain phenotypes in first-episode mania: normative modelling of brain morphometry and brainAGE. BJPsych Open. 2025;11(3):e95. doi: 10.1192/bjo.2025.28',
                    link: 'https://doi.org/10.1192/bjo.2025.28',
                    id: uuid(),
                },
                {
                    info: 'Hopkins WD, Frangou S, Ge R. Brain age gap is associated with cognitive abilities in captive chimpanzees. Sci Rep. 2025;15:41984. doi: 10.1038/s41598-025-26062-5',
                    link: 'https://www.nature.com/articles/s41598-025-26062-5',
                    id: uuid(),
                },
                {
                    info: 'Haas S, Ge R, et al., Frangou S. Normative modeling of brain morphometry in Clinical High-Risk for Psychosis. JAMA Psychiatry. 2024;81(1):77-88. doi: 10.1001/jamapsychiatry.2023.3850',
                    link: 'https://www.jamanetwork.com/journals/jamapsychiatry/fullarticle/2810624',
                    id: uuid(),
                },
                {
                    info: 'Sanford N, Ge R, Antoniades M, Modabbernia A, Haas SS, Whalley HC, Galea L, Popescu SG, Cole JH, Frangou S. Sex differences in predictors and regional patterns of brain age gap estimates. Hum Brain Mapp. 2022;43(15):4689-4698. doi: 10.1002/hbm.25983',
                    link: 'https://onlinelibrary.wiley.com/doi/10.1002/hbm.25983',
                    id: uuid(),
                }
            ]
        },
        {
            title: "Preprints",
            items: [
                {
                    info: 'Zhang X, Yu Y, Liu X, Fang Y, Wang J, Frangou S, Zang Y, Ge R, Zhang H. Medication and Developmental Stage Shape the Brain-Age Gap in ADHD. BioRXiv. 2026. doi: 10.64898/2026.01.19.700322',
                    link: 'https://doi.org/10.64898/2026.01.19.700322',
                    id: uuid(),
                }
            ]
        }
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

                    {/* Card Container mapped by groups */}
                    <div className={`polished-card card-slide-up delay-100 ${ready ? '' : 'hidden'}`} style={{ padding: '0', paddingBottom: '16px' }}>
                        {publicationGroups.map((group, groupIndex) => (
                            <div key={groupIndex}>
                                <Typography 
                                    variant="h6" 
                                    style={{ 
                                        padding: '24px 24px 8px 24px', 
                                        fontWeight: 700, 
                                        color: '#001529',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    {group.title}
                                </Typography>
                                {group.items.map((pub) => (
                                    <PublicationItem key={pub.id} {...pub} />
                                ))}
                            </div>
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