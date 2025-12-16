import Grid from '@material-ui/core/Grid';
import React, { useState, useMemo, useEffect, useRef } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// --- 1. SEPARATE COMPONENT FOR INDIVIDUAL GRAPH ---
// Defined outside to prevent React from re-creating the function on every render
const GraphFrame = React.memo(({ url, isVisible, isImage, onZoom }) => {
    const [loaded, setLoaded] = useState(false);
    
    // If it's an image, we want to reset loaded state if the URL changes
    // If it's an iframe in the pool, the URL prop won't change (the key handles that), 
    // but this safety check helps.
    useEffect(() => {
        if (!isVisible) return; 
        // We don't reset 'loaded' here for iframes because we want to preserve 
        // their state when they become visible again.
    }, [isVisible]);

    const style = {
        display: isVisible ? 'flex' : 'none',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    };

    return (
        <div style={style}>
            {!loaded && (
                <div style={{position:'absolute', zIndex:10}}>
                    <CircularProgress size={40} thickness={2} style={{color: '#001529'}} />
                </div>
            )}
            
            {isImage ? (
                <img 
                    src={url} 
                    style={{
                        maxWidth:'100%', 
                        maxHeight:'450px', 
                        objectFit: 'contain', 
                        opacity: loaded ? 1 : 0, 
                        transition: 'opacity 0.3s',
                        cursor: 'zoom-in'
                    }} 
                    alt="Graph"
                    onLoad={() => setLoaded(true)}
                    onClick={() => onZoom(url)}
                />
            ) : (
                <iframe 
                    src={url} 
                    onLoad={() => setLoaded(true)}
                    style={{
                        width:'100%', 
                        height:'450px', 
                        border:'none', 
                        opacity: loaded ? 1 : 0, 
                        transition: 'opacity 0.3s'
                    }} 
                    title="Graph" 
                />
            )}
        </div>
    );
});

// --- 2. SMART POOL COMPONENT ---
// Keeps the last 'maxSize' graphs alive in the DOM
const GraphPool = ({ currentUrl, isImage, onZoom }) => {
    const [pool, setPool] = useState([]);
    const maxSize = 3; // Keep last 3 graphs in memory (approx 60MB RAM, safe for browsers)

    useEffect(() => {
        if (!currentUrl) return;

        setPool(prevPool => {
            // Check if URL is already in pool
            if (prevPool.some(item => item.url === currentUrl)) {
                return prevPool;
            }

            // Add new URL to pool
            const newPool = [...prevPool, { url: currentUrl, type: isImage ? 'img' : 'html' }];
            
            // If pool is too big, remove the oldest one (FIFO/LRUish)
            if (newPool.length > maxSize) {
                return newPool.slice(newPool.length - maxSize);
            }
            return newPool;
        });
    }, [currentUrl, isImage]);

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

    if (!currentUrl) {
        return (
            <div style={containerStyle}>
                <p style={{color:'#aaa', fontWeight: 500}}>Select options to view graph</p>
            </div>
        );
    }

    return (
        <div style={containerStyle}>
            {pool.map((item) => (
                <GraphFrame 
                    key={item.url} // React key ensures DOM element is preserved
                    url={item.url}
                    isImage={isImage}
                    isVisible={item.url === currentUrl}
                    onZoom={onZoom}
                />
            ))}
        </div>
    );
};

export default function Graphs(props) {
    const [zoomedSrc, setZoomedSrc] = useState(null);

    // Calculate URLs
    const getUrls = (isMFP) => {
        let basePath = 'https://rawcdn.githack.com/CentileBrain/CentileBrainWebsite/main/';
        let result = { left: '', right: '' };

        if (!props.gender || !props.morphometric) return result;
        if (props.morphometric === 'volumes' && !props.value) return result;
        if (props.morphometric === 'thickness' && !props.thickness) return result;
        if (props.morphometric === 'area' && !props.area) return result;

        const curveType = isMFP ? 'MFP' : 'Centile';
        const typeFolder = props.morphometric === 'volumes' ? 'sv' : props.morphometric === 'thickness' ? 'ct' : 'ca';
        const folder = `src/Explore/data/${typeFolder}/${props.gender}${curveType}`;
        const ext = isMFP ? '.png' : '.html';

        if (props.morphometric === 'volumes') {
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
                result.left = `${basePath}${folder}${lSuffix}${ext}`;
                result.right = `${basePath}${folder}${rSuffix}${ext}`;
            }
        }
        else if (props.morphometric === 'thickness' || props.morphometric === 'area') {
            const val = props.morphometric === 'thickness' ? props.thickness : props.area;
            result.left = `${basePath}${folder}/${val}${ext}`;
            result.right = `${basePath}${folder}/${34 + parseInt(val)}${ext}`;
        }

        return result;
    };

    const centileUrls = useMemo(() => getUrls(false), [props.gender, props.morphometric, props.value, props.thickness, props.area]);
    const mfpUrls = useMemo(() => getUrls(true), [props.gender, props.morphometric, props.value, props.thickness, props.area]);

    // We toggle visibility of the ENTIRE pool wrapper
    return (
        <React.Fragment>
            <Grid container spacing={4} style={{ marginTop: '1rem' }}>
                <Grid item xs={12} md={6}>
                    {/* Centile Pool */}
                    <div style={{ display: !props.MFPCurve ? 'block' : 'none', height: '100%' }}>
                        <GraphPool currentUrl={centileUrls.left} isImage={false} onZoom={setZoomedSrc} />
                    </div>
                    {/* MFP Pool */}
                    <div style={{ display: props.MFPCurve ? 'block' : 'none', height: '100%' }}>
                        <GraphPool currentUrl={mfpUrls.left} isImage={true} onZoom={setZoomedSrc} />
                    </div>
                </Grid>
                
                <Grid item xs={12} md={6}>
                     {/* Centile Pool */}
                     <div style={{ display: !props.MFPCurve ? 'block' : 'none', height: '100%' }}>
                        <GraphPool currentUrl={centileUrls.right} isImage={false} onZoom={setZoomedSrc} />
                    </div>
                    {/* MFP Pool */}
                    <div style={{ display: props.MFPCurve ? 'block' : 'none', height: '100%' }}>
                        <GraphPool currentUrl={mfpUrls.right} isImage={true} onZoom={setZoomedSrc} />
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