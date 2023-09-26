import Grid from '@material-ui/core/Grid';
import React from 'react';
import Iframe from 'react-iframe';

export default function Graphs(props) {
    let html1;
    let html2;

    function renderWidth() {
        if (props.hidden) {
            return '0px';
        }
        return '100%';
    }
    
    function renderSwitchLeft() {
        let filePath = 'https://raw.githubusercontent.com/CentileBrain/CentileBrainWebsite/main/';

        if (props.gender === ``) {
            return '';
        }
        if (props.morphometric === 'volumes') {
            if (props.value === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/maleCentile';
            }
            switch (props.value) {
                case 'thalamus':
                    filePath += '/1';
                    break;
                case 'caudate':
                    filePath += '/3';
                    break;
                case 'putamen':
                    filePath += '/5';
                    break;
                case 'pallidum':
                    filePath += '/7';
                    break;
                case 'hippocampus':
                    filePath += '/9';
                    break;
                case 'amygdala':
                    filePath += '/11';
                    break;
                case 'nucleusaccumbens':
                    filePath += '/13';
                    break;
            }
        if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                return filePath + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                return filePath + '.html';
            } 
            return '';
        }

        if (props.morphometric === 'thickness') {
            if (props.thickness === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/maleCentile';
            }
            
            if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + props.thickness + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + props.thickness + '.html';
            } 
            console.log(filePath);
            return filePath;
        } else {
            if (props.area === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/maleCentile';
            }
        
            if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + props.area + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + props.area + '.html';
            } 
            console.log(filePath);
            file
            return filePath;
        }
    }
 
    function renderSwitchRight() {
        let filePath = 'https://raw.githubusercontent.com/CentileBrain/CentileBrainWebsite/main/';
        if (props.gender === ``) {
            return '';
        }
        if (props.morphometric === 'volumes') {
            if (props.value === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/sv/maleCentile';
            }
            switch (props.value) {
                case 'thalamus':
                    filePath +='/2';
                    break;
                case 'caudate':
                    filePath += '/4';
                    break;
                case 'putamen':
                    filePath += '/6';
                    break;
                case 'pallidum':
                    filePath += '/8';
                    break;
                case 'hippocampus':
                    filePath += '/10';
                    break;
                case 'amygdala':
                    filePath += '/12';
                    break;
                case 'nucleusaccumbens':
                    filePath += '/14';
                    break;
            }
            if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                return filePath + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                return filePath + '.html';
            } 
            return '';
        }
        if (props.morphometric === 'thickness') {
            if (props.thickness === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ct/maleCentile';
            }
            let value = 34 + parseInt(props.thickness);
            if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + value.toString() + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + value.toString() + '.html';
            } 
            console.log(filePath);
            return filePath;
        } else {
            if (props.area === '') {
                return '';
            }
            if (props.gender === 'female' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/femaleMFP';
            }
            if (props.gender === 'female' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/femaleCentile';
            }
            if (props.gender === 'male' && props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/maleMFP';
            }
            if (props.gender === 'male' && !props.MFPCurve) {
                filePath = filePath + 'src/Explore/data/ca/maleCentile';
            }
            let value = 34 + parseInt(props.area);
            if (props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + value.toString() + '.png';
            }
            if (!props.MFPCurve && (props.gender === 'male' || props.gender === 'female')) {
                filePath += '/' + value.toString() + '.html';
            } 
            console.log(filePath);
            file
            return filePath;
        }
    }

    function renderHtmlLeft(url) {
        if (url) {
            fetch(url)
                .then(async fileText => (html1 = await fileText.text()))
                .then((data) => {
                    document.getElementsByTagName(
                        'iframe'
                    )[0].src = URL.createObjectURL(
                        new Blob([html1], { type: 'text/html' })
                    );
                });
              
                
        }
    }

    function renderHtmlRight(url) {
        if (url) {
            fetch(url)
                .then(async fileText => (html2 = await fileText.text()))
                .then(() => {
                    document.getElementsByTagName(
                        'iframe'
                    )[1].src = URL.createObjectURL(
                        new Blob([html2], { type: 'text/html' })
                    );
                });
        }
    }

    return (
        <Grid
            container
            spacing={3}
            style={{ alignItems: 'center', marginTop: '2rem' }}
        >
            <Grid item xs={12} md={1}></Grid>
            <Grid item xs={12} md={5}>
                <div style={{ alignItems: 'center' }}>
                    {
                        props.MFPCurve && (props.gender==='male' || props.gender==='female') 
                        ?
                        <div>
                            <img 
                                src={renderSwitchLeft()}
                                width={renderWidth()}
                                height="450px"
                            ></img>
                        </div>
                        // <Iframe 
                        //     url={renderSwitchLeft()}
                        //     width={renderWidth()}
                        //     height="450px"
                        // ></Iframe> 
                        :
                        <Iframe
                            url={renderHtmlLeft(renderSwitchLeft())}
                            width={renderWidth()}
                            height="450px"
                        ></Iframe>
                    }
                    
                </div>
            </Grid>
            <Grid item xs={12} md={5}>
                <div style={{ alignItems: 'center' }}>
                {
                        props.MFPCurve && (props.gender==='male' || props.gender==='female') 
                        ?
                        <div>
                            <img 
                                src={renderSwitchRight()}
                                width={renderWidth()}
                                height="450px"
                            ></img>
                        </div>
                        // <Iframe 
                        //     url={renderSwitchRight()}
                        //     width={renderWidth()}
                        //     height="450px"
                        // ></Iframe> 
                        :
                        <Iframe
                            url={renderHtmlRight(renderSwitchRight())}
                            width={renderWidth()}
                            height="450px"
                        ></Iframe>
                    }
                </div>
            </Grid>
            <Grid item xs={12} md={1}></Grid>
        </Grid>
    );
}
