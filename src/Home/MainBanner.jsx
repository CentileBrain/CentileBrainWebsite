import { Col, Row, Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const VIDEO_WEBM = 'https://centilebrainwebsiteimage.s3.us-east-1.amazonaws.com/Background.webm';
const VIDEO_MP4  = 'https://centilebrainwebsiteimage.s3.us-east-1.amazonaws.com/Background.mp4';

function Banner(props) {
    return (
        <div style={{ 
            position: 'relative', 
            minHeight: '100vh',
            width: '100vw',
            marginLeft: 'calc(-50vw + 50%)',
            marginRight: 'calc(-50vw + 50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#001529', 
            backgroundImage: 'none' 
        }}>
            {/* CSS FIX: This block forces the shadow to persist during hover */}
            <style>{`
                .banner-btn {
                    height: 60px !important;
                    padding: 0 50px !important;
                    font-size: 20px !important;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
                    transition: all 0.3s ease !important;
                    border: none;
                }
                
                .banner-btn:hover {
                    transform: translateY(-3px); 
                    box-shadow: 0 10px 25px rgba(0,0,0,0.5) !important; 
                }

                .banner-btn-ghost {
                    border: 2px solid white !important;
                    color: white !important;
                    background: transparent;
                }
                .banner-btn-ghost:hover {
                    background: rgba(255, 255, 255, 0.1) !important; 
                }
            `}</style>
            
            {/* LAYER 1: The Video Background */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                }}
            >
                <source src={VIDEO_WEBM} type="video/webm" />
                <source src={VIDEO_MP4} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* LAYER 2: The Blue Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(0, 21, 41, 0.90) 0%, rgba(0, 89, 152, 0.80) 100%)',
                zIndex: 1
            }} />

            {/* LAYER 3: The Content */}
            <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                <Row type="flex" justify="center" align="middle" style={{ width: '100%', margin: 0 }}>
                    <Col span={22} md={16}>
                        <div style={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%'
                        }}>
                            
                            <h1 style={{ 
                                margin: '0 0 20px 0', 
                                padding: 0,
                                lineHeight: '1.2',
                                color: 'white', 
                                fontSize: '4rem', 
                                fontWeight: 'bold',
                                textAlign: 'center',
                                textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                border: 'none',
                                background: 'transparent'
                            }}>
                                CentileBrain
                            </h1>
                            
                            <p style={{ 
                                color: 'rgba(255,255,255,0.9)', 
                                fontSize: '1.4rem', 
                                maxWidth: '800px', 
                                marginBottom: '50px', 
                                lineHeight: '1.6',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center',
                                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                            }}>
                                CentileBrain offers the opportunity to generate metrics for typical 
                                brain trajectories for research purposes only based on models provided by the
                                ENIGMA Lifespan Working Group
                            </p>
                            
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
                                <Link to="/explore">
                                    <Button 
                                        type="primary" 
                                        size="large" 
                                        shape="round" 
                                        icon="rocket" 
                                        className="banner-btn"
                                    >
                                        Explore Dataset
                                    </Button>
                                </Link>
                                
                                <Link to="/contact">
                                    <Button 
                                        size="large" 
                                        shape="round" 
                                        className="banner-btn banner-btn-ghost"
                                    >
                                        Contact Us
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* LAYER 4: Tiny Vecteezy attribution */}
            <a
                href="https://www.vecteezy.com/free-videos/brain"
                style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '12px',
                    fontSize: '4px',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    zIndex: 3,
                    pointerEvents: 'auto'
                }}
                target="_blank"
                rel="noreferrer"
            >
                Brain Stock Videos by Vecteezy
            </a>
        </div>
    );
}

Banner.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default Banner;
