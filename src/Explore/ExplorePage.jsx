import './explore.css';
import Grid from '@material-ui/core/Grid';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Home/Header';

export default function ExplorePage(props) {
    const location = useLocation();
    const [ready, setReady] = useState(false);
    
    // State for the image URL and the closing animation status
    const [selectedImage, setSelectedImage] = useState(null);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setReady(true);
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    // Function to trigger the closing animation
    const startClose = () => {
        setIsClosing(true);
        // Wait 300ms for the animation to finish, then actually remove the image
        setTimeout(() => {
            setSelectedImage(null);
            setIsClosing(false);
        }, 300); 
    };

    // Listen for 'Escape' key
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                startClose();
            }
        };
        
        // Only add listener if an image is currently open
        if (selectedImage) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedImage]); // Re-run when selectedImage changes

    const handleImageClick = (src) => {
        setSelectedImage(src);
        setIsClosing(false);
    };

    return (
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
                <div style={{ height: '60vh' }}></div>
            ) : (
                <div className="page-fade-in" style={{ maxWidth: '1350px', margin: '0 auto', padding: '0 24px' }}>
                    <Grid container spacing={4} alignItems="stretch">
                        
                        <Grid item xs={12} md={6} className="card-slide-up delay-100">
                            <div className="polished-card">
                                <div className="card-image-container">
                                    <img
                                        src="https://centilebrainwebsiteimage.s3.amazonaws.com/age_distribution_new.jpg"
                                        width="100%"
                                        alt="Age Distribution"
                                        loading="lazy"
                                        className="zoomable-image"
                                        onClick={() => handleImageClick("https://centilebrainwebsiteimage.s3.amazonaws.com/age_distribution_new.jpg")}
                                    />
                                </div>
                                <h5 className="section-title">
                                    Age and Sex Distribution of the Datasets in the CentileBrain Data Vault
                                </h5>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} className="card-slide-up delay-200">
                            <div className="polished-card">
                                <div className="card-image-container">
                                    <img
                                        src="https://centilebrainwebsiteimage.s3.amazonaws.com/CentileBrain_Map_2025%3A09%3A22.jpg"
                                        width="100%"
                                        alt="Geographical Map"
                                        loading="lazy"
                                        className="zoomable-image"
                                        onClick={() => handleImageClick("https://centilebrainwebsiteimage.s3.amazonaws.com/CentileBrain_Map_2025%3A09%3A22.jpg")}
                                    />
                                </div>
                                <h5 className="section-title">
                                    Geographical Distribution of the Datasets Contributing to the CentileBrain Data Vault
                                </h5>
                            </div>
                        </Grid>
                    </Grid>

                    <div className="card-slide-up delay-300" style={{ textAlign: 'center', marginTop: '50px' }}>
                        <p style={{ fontSize: '1.05rem', color: '#595959' }}>
                            Information on the datasets can be found{' '}
                            <a
                                href="https://docs.google.com/spreadsheets/d/1d-1bfKskhPSkfFnZXA68h9S7Lla6NRVU/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#1890ff', fontWeight: 'bold', textDecoration: 'none', borderBottom: '1px solid #1890ff' }}
                            >
                                here
                            </a>.
                        </p>
                    </div>
                </div>
            )}

            {selectedImage && (
                // We conditionally add the 'closing' class based on state
                <div 
                    className={`zoom-overlay ${isClosing ? 'closing' : ''}`} 
                    onClick={startClose}
                >
                    <div className="zoom-container">
                        <img src={selectedImage} alt="Zoomed View" />
                    </div>
                </div>
            )}
        </div>
    );
}