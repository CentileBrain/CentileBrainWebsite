// prettier-ignore
import { Box,Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import Header from '../Home/Header';

const useStyles = makeStyles(theme => ({}));

export default function PublicationsPage(props) {
    const classes = useStyles();

    let publications = [
        {
            info:
                'Frangou S, Modabbernia A, Williams SCR, et al. Cortical thickness across the lifespan: Data from 17,075 \
            healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25364. doi:10.1002/hbm.25364',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33595143/',
            id: uuid(),
        },
        {
            info:
                'Dima D, Modabbernia A, Papachristou E, et al. Subcortical volumes across the lifespan: Data from 18,605 \
            healthy individuals aged 3-90 years. Hum Brain Mapp. 2021;10.1002/hbm.25320. doi:10.1002/hbm.25320',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33570244/',
            id: uuid(),
        },
        {
            info:
                'Wierenga LM, Doucet GE, Dima D, et al. Greater male than female variability in regional brain structure across \
            the lifespan [published online ahead of print, 2020 Oct 12]. Hum Brain Mapp. 2020;10.1002/hbm.25204. doi:10.1002/hbm.25204',
            link: 'https://pubmed.ncbi.nlm.nih.gov/33044802/',
            id: uuid(),
        },
        {
            info:
                'Modabbernia A, Whalley HC, Glahn DC, Thompson PM, Kahn RS, Frangou S. Systematic evaluation of machine learning  ' +
                'algorithms for neuroanatomically-based age prediction in youth. Hum Brain Mapp. 2022; doi:10.1002/hbm.26010\n',
            link: 'https://pubmed.ncbi.nlm.nih.gov/35852028/',
            id: uuid(),
        },
        {
            info:
                'Sanford N, Ge R, Antoniades M, Modabbernia A, Haas SS, Whalley HC, Galea L, Popescu SG, Cole JH, Frangou S.  ' +
                'Sex differences in predictors and regional patterns of brain age gap estimates. Hum Brain Mapp. 2022; doi: 10.1002/hbm.25983',
            link: 'https://pubmed.ncbi.nlm.nih.gov/35790053/',
            id: uuid(),
        },
        {
            info:
                'Ge R, Yu Y, Qi Y, Haas S, etc, Thompson P, Frangou S.  ' +
                'Normative Modeling of Brain Morphometry Across the Lifespan using CentileBrain: Algorithm Benchmarking and Model Optimization. Lancet Digit Health. 2024; doi: 10.1016/S2589-7500(23)00250-9',
            link: 'https://doi.org/10.1016/S2589-7500(23)00250-9',
            id: uuid(),
        },
        {
            info:
                'Haas S, Ge R, etc, Frangou S.  ' +
                'Normative modeling of brain morphometry in Clinical High-Risk for Psychosis. JAMA Psychiatry. 2024; doi: 10.1001/jamapsychiatry.2023.3850',
            link: 'https://www.jamanetwork.com/journals/jamapsychiatry/fullarticle/2810624',
            id: uuid(),
        },
        {
            info:
                'Yu Y, Cui H, etc, Thompson P, Frangou S, Ge R.  ' +
                'Brain-Age Prediction: Systematic Evaluation of Site Effects, and Sample Age Range and Size. 2024; doi: 10.1101/2023.11.06.565917',
            link: 'https://www.biorxiv.org/content/10.1101/2023.11.06.565917v1',
            id: uuid(),
        },
    ];

    return (
        <div>
            <Header></Header>
            <Box sx={{ m: 3 }}>
                <Typography variant="h4">Publications</Typography>
                <div>
                    {publications.map(publication => (
                        <Publication key={publication.id} {...publication} />
                    ))}
                </div>
            </Box>
        </div>
    );
}

function Publication(props) {
    const { info, link } = props;
    return (
        <Box sx={{ m: 5 }}>
            <Typography variant="body1">{info}</Typography>
            <div className="info">
                <p style={{ display: 'inline-block', marginRight: '1em' }}>
                    Type: journal article
                </p>
                <Button
                    variant="outlined"
                    size="small"
                    style={{ display: 'inline-block' }}
                    onClick={() => (window.location.href = link)}
                >
                    Link
                </Button>
            </div>
        </Box>
    );
}
