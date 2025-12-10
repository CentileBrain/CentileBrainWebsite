import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect, useMemo } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Graphs(props) {
    const [leftSrcDoc, setLeftSrcDoc] = useState(null);
    const [rightSrcDoc, setRightSrcDoc] = useState(null);
    const [loading, setLoading] = useState(false);
    const [zoomedSrc, setZoomedSrc] = useState(null);

    const { leftUrl, rightUrl, isImage } = useMemo(() => {
        let basePath = 'https://raw.githubusercontent.com/CentileBrain/CentileBrainWebsite/main/';
        let result = { leftUrl: '', rightUrl: '', isImage: props.MFPCurve };

        if (!props.gender || !props.morphometric) return result;
        if (props.morphometric === 'volumes' && !props.value) return result;
        if (props.morphometric === 'thickness' && !props.thickness) return result;
        if (props.morphometric === 'area' && !props.area) return result;

        const getFolder = (type) => {
            const curveType = props.MFPCurve ? 'MFP' : 'Centile';
            return `src/Explore/data/${type}/${props.gender}${curveType}`;
        };
        const ext = props.MFPCurve ? '.png' : '.html';

        if (props.morphometric === 'volumes') {
            const folder = getFolder('sv');
            let lSuffix = '', rSuffix = '';
            switch (props.value) {
                case 'thalamus': lSuffix = '/1'; rSuffix = '/2'; break;
                case 'caudate': lSuffix = '/3'; rSuffix = '/4'; break;
                case 'putamen': lSuffix = '/5'; rSuffix = '/6'; break;
                case 'pallidum': lSuffix = '/7'; rSuffix = '/8'; break;
                case 'hippocampus': lSuffix = '/9'; rSuffix = '/10'; break;
                case 'amygdala': lSuffix = '/11'; rSuffix = '/12'; break;
                case 'nucleusaccumbens': lSuffix = '/13'; rSuffix = '/14'; break;
                default: break;
            }
            if (lSuffix) {
                result.leftUrl = `${basePath}${folder}${lSuffix}${ext}`;
                result.rightUrl = `${basePath}${folder}${rSuffix}${ext}`;
            }
        }
        else if (props.morphometric === 'thickness') {
            const folder = getFolder('ct');
            result.leftUrl = `${basePath}${folder}/${props.thickness}${ext}`;
            result.rightUrl = `${basePath}${folder}/${34 + parseInt(props.thickness)}${ext}`;
        }
        else if (props.morphometric === 'area') {
            const folder = getFolder('ca');
            result.leftUrl = `${basePath}${folder}/${props.area}${ext}`;
            result.rightUrl = `${basePath}${folder}/${34 + parseInt(props.area)}${ext}`;
        }

        return result;
    }, [props.gender, props.morphometric, props.value, props.thickness, props.area, props.MFPCurve]);

    useEffect(() => {
        if (!leftUrl || !rightUrl) return;

        if (isImage) {
            setLoading(false);
            return;
        }

        setLoading(true);
        
        Promise.all([
            fetch(leftUrl).then(res => res.text()),
            fetch(rightUrl).then(res => res.text())
        ]).then(([leftText, rightText]) => {
            setLeftSrcDoc(leftText);
            setRightSrcDoc(rightText);
            setLoading(false);
        }).catch(err => {
            console.error("Error loading graphs:", err);
            setLoading(false);
        });

    }, [leftUrl, rightUrl, isImage]);

    const containerStyle = {
        background: 'white', 
        borderRadius: '16px', 
        minHeight: '460px', 
        height: '100%',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02)',
        position: 'relative',
        border: '1px solid rgba(0,0,0,0.03)',
        overflow: 'hidden'
    };

    return (
        <React.Fragment>
            <Grid container spacing={4} style={{ marginTop: '1rem' }}>
                <Grid item xs={12} md={6}>
                    <div style={containerStyle}>
                        {!leftUrl ? <p style={{color:'#aaa', fontWeight: 500}}>Select options to view graph</p> : 
                         loading ? <CircularProgress size={40} thickness={2} style={{color: '#001529'}} /> :
                         isImage ? 
                            <img 
                                src={leftUrl} 
                                style={{maxWidth:'100%', maxHeight:'450px', objectFit: 'contain'}} 
                                alt="Left Graph"
                                className="zoomable-image"
                                onClick={() => setZoomedSrc(leftUrl)}
                            /> :
                         <iframe srcDoc={leftSrcDoc} style={{width:'100%', height:'450px', border:'none'}} title="Left" />
                        }
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                     <div style={containerStyle}>
                        {!rightUrl ? <p style={{color:'#aaa', fontWeight: 500}}>Select options to view graph</p> : 
                         loading ? <CircularProgress size={40} thickness={2} style={{color: '#001529'}} /> :
                         isImage ? 
                            <img 
                                src={rightUrl} 
                                style={{maxWidth:'100%', maxHeight:'450px', objectFit: 'contain'}} 
                                alt="Right Graph"
                                className="zoomable-image"
                                onClick={() => setZoomedSrc(rightUrl)}
                            /> :
                         <iframe srcDoc={rightSrcDoc} style={{width:'100%', height:'450px', border:'none'}} title="Right" />
                        }
                    </div>
                </Grid>
            </Grid>

            {zoomedSrc && (
                <div className="zoom-overlay" onClick={() => setZoomedSrc(null)}>
                    <div className="zoom-container">
                        <img src={zoomedSrc} alt="Zoomed Graph" />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}