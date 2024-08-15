import './FaqPage.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Header from '../Home/Header';
import { Link } from 'react-router-dom';

export default function FaqPage(props) {
    // return a list of questions and answers, grey background for questions
    // white background for answers

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
        },
        question: {
            backgroundColor: '#f0f0f0',
            padding: theme.spacing(2),
            textAlign: 'left',
            fontSize: '1.2rem',
        },
        answer: {
            backgroundColor: 'white',
            padding: theme.spacing(2),
            textAlign: 'left',
            fontSize: '1rem',
        },
    }));

    const classes = useStyles();

    const questions = [
        'Who created and maintains the CentileBrain platform?',
        'How does the CentileBrain platform handle the data uploaded by users?',
        'Can I donate data to the CentileBrain initiative?',
        'What is the unit measurement for age in the CentileBrain Models?',
        'Do I have to use the spreadsheet templates provided for computing models on my data?',
        'What data format can I input into the CentileBrain platform?',
        'How does the CentileBrain platform handles missing data?',
        'What is the smallest sample size I can use with the CentileBrain models?',
        'I want to calculate normative scores from neuroimaging data acquired on the same scanner using the same sequence. What is the best approach?',
        'How does the CentileBrain platform deal with multisite data?',
        'What is the best approach to calculate normative scores from the neuroimaging data of over 200 participants scanned at multiple sites?',
        'I have a large multisite sample, but some sites have contributed less than 5 participants. Is this a problem?',
    ];

    const answers = [
        'The CentileBrain platform was created and is maintained by a team of academics. For more information, please refer to the Core Team section on our website.',
        "The CentileBrain platform does not require any data sharing or transfer. The data you upload is temporarily stored on the platform's scratch pad solely for computation purposes. After the computation is complete, both your uploaded data and the generated results are deleted. The CentileBrain team has no access to your data or results.",
        'We appreciate and encourage data donations, provided you have the necessary approval to share de-identified data from your sample. Your contribution will be acknowledged on the CentileBrain platform and in any manuscripts that utilize your donated sample. If you are interested, please contact Sophia Frangou at Sophia.Frangou@gmail.com.',
        'Currently, age is measured in years in all the models on the CentileBrain platform; if you use any other unit (e.g., months), the models will not work.',
        'Yes, it is essential to use the provided spreadsheet templates. The CentileBrain algorithms rely on the assumption that variables are correctly placed in the designated columns. For instance, hippocampal data must be in the hippocampus column. Misplacing data, such as putting thalamus data in the hippocampus column, will lead to incorrect calculations without any error notification. Ensuring that data for each region is accurately placed in its assigned column is crucial for accurate model computation.',
        'The CentileBrain platform requires data to be uploaded as an Excel spreadsheet. Spreadsheet templates for each model are available in the corresponding user interface. It is crucial that all cells in the spreadsheet remain in the "numeric" format; if this format is accidentally altered, the models will not function correctly.',
        'The CentileBrain models will not function if there are missing data on the input spreadsheet. Users can either remove study participants with missing data or impute the missing data before uploading their spreadsheet to the CentileBrain platform. ',
        'All CentileBrain models can operate with a minimum sample size of one.',
        'Please enter the number "1" for all entries in the “site” field on the spreadsheets. ',
        'The CentileBrain platform handles site effects differently for different models. \nBrainAGE models (global or network-based) do not use site correction as per our paper by Yu et al., 2024 (PMID: 38949537).\n All normative brain models use CombatGAM for site correction as per our paper by Ge et al., 2024 (PMID: 38395541).',
        'While the CentileBrain platform can apply CombatGAM to your dataset, this process may slow down computations and potentially cause time-outs. We recommend pre-processing your dataset with CombatGAM outside of CentileBrain platform and then uploading the harmonized data for more efficient computation. In this case, please enter the number “1” for all entries in the “site” field on the spreadsheet so that the CentileBrain algorithm skips the harmonization step. ',
        'The normative models in CentileBrain cannot process multisite data if any site contributes fewer than 5 participants. In such cases, please either assign these participants to the site with the largest sample (preferred) or upload the data from each site with such small samples separately.',
    ];

    return (
        <div className={classes.root}>
            <Header />

            <Grid
                container
                spacing={3}
                style={{ width: '1000px', position: 'relative', margin: 'auto' }}
            >
                <Grid item xs={12} md={12}>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        justify="center"
                        alignContent={'center'}
                    >
                        <Grid>
                            <br />
                            <h1 align="center">Frequently Asked Questions</h1>
                            <br />
                        </Grid>
                        {questions.map((question, index) => (
                            <Grid item xs={12} key={index}>
                                <Box className={classes.question}>{question}</Box>
                                <Box className={classes.answer}>
                                    <span
                                        className="text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: answers[index],
                                        }}
                                    />
                                </Box>
                            </Grid>
                        ))}
                        <span
                            style={{
                                paddingTop: '1rem',
                                paddingBottom: '1rem',
                                color: 'grey',
                            }}
                        >
                            Version: August 2024
                        </span>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
