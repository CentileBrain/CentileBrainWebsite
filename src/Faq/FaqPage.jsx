import './FaqPage.css';
import React, { useState, useEffect } from 'react';
import Header from '../Home/Header';

// Material UI Imports
import {
    ThemeProvider,
    createTheme,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// 1. Define the Premium Theme
const premiumTheme = createTheme({
    palette: { primary: { main: '#001529' }, text: { primary: '#262626' } },
    shape: { borderRadius: 16 },
    typography: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    }
});

export default function FaqPage(props) {
    const [ready, setReady] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

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
        'What are the CentileBrain outputs of the normative models of regional brain morphometry and what do they mean?',
        'What should I do if I use data from multiple scanners/ vendors, but from a single research site?',
        'How does the CentileBrain platform deal with multisite data?',
        'What is the best approach to calculate normative scores from the neuroimaging data of over 200 participants scanned at multiple sites?',
        'I have a large multisite sample, but some sites have contributed less than 5 participants. Is this a problem?',
        'Are there CentileBrain models of morphometry without correction for glbal measures (i.e., ICV, mean cortical surface area, mean cortical thickness)?',
        'What is the difference between a normative z-score and a generic z-score "in standard deviation units"?',
        'What are the CentileBrain outputs of the brainAGE models and what do they mean?',
        'How is age adjustment implemented in the brainAGE models?'
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
        'Please enter the number "1" for all entries in the “site” field on the spreadsheets.',
        "<b>Normative Z-scores:</b> In CentileBrain, a normative z-score (also termed a normative deviation score) is a standardised residual that quantifies how much an individual's observed regional brain morphometry value departs from the value predicted by the CentileBrain model for a healthy person of the same age and sex. Z ≈ 0 indicates close concordance with the normative trajectory; positive values indicate that the individual has higher-than-expected values for that region; and negative values indicate lower-than-expected values.<br /><br /><b>Predicted Morphometric Measures:</b> The CentileBrain models return the expected value for each regional morphometric measure for an individual of the same age and sex, adjusted for the relevant global brain measure (intracranial volume, mean cortical thickness, or total surface area). These predicted value is the normative benchmark for that specific region: what the model expects a typical individual (within the reference sample framework) to show at that age and sex and with that global morphometric context.<br /><br /><b>Model Accuracy:</b> In CentileBrain, model accuracy is reported as prediction error for each sex-specific, region-specific model. This file addresses the question \"how well does the Centile Brain prediction match my data?\". This is a unique feature of the CentileBrain platform that enables researchers to evaluate the performance of the CentileBrain models to their specific dataset and decide whether it is acceptable to them. The metrics provided are (a) the mean absolute error (MAE), defined as the average absolute difference between the predicted and observed values of each regional measure; (b) the Root Mean Square Error (RMSE) which is a summary of the typical size of prediction errors.",
        'Clearly distinguish the scanners or vendors in the "SITE" column of the provided spreadsheet templates. This will enable the online calculation tool to account for and remove the scanner effect.',
        'The CentileBrain platform handles site effects differently for different models. <br />BrainAGE models (global or network-based) do not use site correction as per our paper by Yu et al., 2024 (PMID: 38949537).<br /> All normative brain models use CombatGAM for site correction as per our paper by Ge et al., 2024 (PMID: 38395541).',
        'While the CentileBrain platform can apply CombatGAM to your dataset, this process may slow down computations and potentially cause time-outs. We recommend pre-processing your dataset with CombatGAM outside of CentileBrain platform using <a href="https://github.com/CentileBrain/centilebrain/tree/main/Python_R_codes/combatGAM_script" target="_blank" style="color:#1890ff;text-decoration:none;"><b>customized script</b></a>. Afterwards, you can upload the harmonized data of your entire sample (regardless of size). When using already harmonized data, please enter the character “A” for all entries in the “SITE” column on the spreadsheet so that the CentileBrain algorithm skips the harmonization step. ',
        'The normative models in CentileBrain cannot process multisite data if any site contributes fewer than 5 participants. In such cases, please either assign these participants to the site with the largest sample (preferred) or upload the data from each site with such small samples separately.',
        'Yes, but we do not recommend using them, as they are less accurate than the models we provide on the main Centilebrain web platform. However, if you would like to explore these models, you can find them <a href="https://github.com/CentileBrain/centilebrain/tree/main/models_without_globalMeasures" target="_blank" style="color:#1890ff;text-decoration:none;"><b>here</b></a>.',
        'Although conceptually similar, the normative z-score and the generic z-score have important differences, so they are not equivalent. <br />A generic z-score is a standardized value that expresses the degree to which an individual measure deviates from the mean of a specific sample. Its value depend entirely on the characteristics of the dataset used to derive the mean and standard deviation (SD). Therefore, it can only be used for comparisons within that specific dataset. <br />A normative z-score is a standardized value that expresses the degree to which an individual measure deviates from an established age-and sex norms, not merely from the average of a specific dataset. Therefore, it can be used for cross-study comparisons. <br />For example, if you compute a generic z-score using a single mean and SD from a sample that spans a wide age range, an individual can look unusually high or low simply because the sample mean depends on the mix of ages included. In that setting, the z-score reflects how the person compares with this age-mixed reference group, rather than whether they are atypical for their own age. A normative z-score avoids this problem by comparing the person with the age-appropriate expected value and variability.',
        'The CentileBrain platform provides three model classes for brain-age-gap-estimates (brainAGE) : (1) developmental global brainAGE for individuals aged 5-22 years; (2) global brainAGE for individuals aged 5-90 years; and (3) network-based brainAGE for individuals aged 5-90 years. Global brainAGE is a single summary index derived from models trained to predict chronological age from whole-brain structural features. Network brainAGE follows the same basic idea but it is computed separately by predicting chronological age the level of brain networks. The CentileBrain models provide brainAGE for the 7 canonical networks: visual, somatomotor, dorsal attention, ventral attention (salience), limbic, frontoparietal control (executive control), and default mode networks (Yeo et al., 2011; doi: 10.1152/jn.00338.2011). Each brainAGE model class yields two outputs:<br /><br />(a) Adjusted Predicted Age: Predicted age is the age the model estimates from a person\'s brain imaging features; the predicted age is also adjusted using bias-correction step that removes systematic dependence of prediction error on chronological age.<br /><br />(b) Adjusted brainAGE: This is computed as predicted age minus the person\'s actual chronological age adjusted to remove dependence on chronological age.',
        'BrainAGE models typically show age-dependent bias (younger individuals are overpredicted and older individuals are underpredicted). Age adjustment corrects this by calibrating predicted age to chronological age using regression functions. The CentileBrain brainAGE models optimize accuracy by using a combination of linear and non-linear functions that are customised to each uploaded dataset by estimating the adjustment from the observed age-prediction relationship in that dataset, then applying it to generate an adjusted predicted age.'
    ];

    return (
        <ThemeProvider theme={premiumTheme}>
            <div className="explore-root">
                <Header />

                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px 60px 24px' }}>
                    
                    {/* Title Section matching Publications Page size */}
                    <div style={{ textAlign: 'center', marginTop: '50px', marginBottom: '50px' }} className={`page-fade-in ${ready ? '' : 'hidden'}`}>
                        <Typography variant="h3" style={{ fontWeight: 700, color: '#001529', fontSize: '2.0rem', letterSpacing: '-0.02em' }}>
                            Frequently Asked Questions
                        </Typography>
                        <Typography variant="body1" style={{ color: '#595959', marginTop: '16px', fontSize: '1.25rem' }}>
                            Everything you need to know about the CentileBrain platform
                        </Typography>
                    </div>

                    {/* FAQ Card Container */}
                    <div className={`polished-card card-slide-up delay-100 ${ready ? '' : 'hidden'}`} style={{ padding: '24px 0' }}>
                        {questions.map((question, index) => (
                            <Accordion 
                                key={index} 
                                expanded={expanded === `panel${index}`} 
                                onChange={handleChange(`panel${index}`)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon fontSize="large" />}
                                    aria-controls={`panel${index}bh-content`}
                                    id={`panel${index}bh-header`}
                                >
                                    {/* Inline styles for Question Text */}
                                    <Typography style={{ fontSize: '1.5rem', fontWeight: 600, color: '#001529', lineHeight: 1.3 }}>
                                        {question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {/* Inline styles for Answer Text */}
                                    <Box style={{ fontSize: '1.15rem', color: '#595959', lineHeight: 1.8 }}>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: answers[index],
                                            }}
                                        />
                                    </Box>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>

                    <div className="card-slide-up delay-200" style={{ textAlign: 'center', marginTop: '40px', color: '#888', fontSize: '1rem' }}>
                        Version: August 2024
                    </div>

                </div>
            </div>
        </ThemeProvider>
    );
}