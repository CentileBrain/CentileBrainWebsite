import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import Map from './Map';

import Grid from '@material-ui/core/Grid';

function Footer() {
    const linkStyle = { textDecoration: 'none', color: 'white', textAlign: 'left' };
    const rowStyle = { paddingTop: '20px', textAlign: 'left' };
    return (
        <footer
            id="footer"
            className="dark"
            style={{ background: '#001529', color: 'white', paddingTop: '20px' }}
        >
            <div style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                <Grid
                    container
                    spacing={5}
                    alignItems={'stretch'}
                    justifyContent={'center'}
                >
                    <Grid item xs={12} md={4}>
                        <Grid item xs={12} justifyContent={'center'}>
                            <Row gutter={[15, 15]} style={{ paddingLeft: '30px' }}>
                                <Col span={12}>
                                    <Row style={rowStyle}>
                                        <Link to="/explore" style={linkStyle}>
                                            Explore the CentileBrain Dataset
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/model" style={linkStyle}>
                                            Use CentileBrain to Generate Estimates
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/model2" style={linkStyle}>
                                            The CentileBrain Model
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/brainAge_developmental" style={linkStyle}>
                                            Global BrainAGE
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/brainAge_network" style={linkStyle}>
                                            Network BrainAGE
                                        </Link>
                                    </Row>
                                </Col>
                                <Col span={12} style={{ paddingLeft: '20px' }}>
                                    <Row style={rowStyle}>
                                        <Link to="/eHarmonize" style={linkStyle}>
                                            eHarmonize
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/faq" style={linkStyle}>
                                            Frequently Asked Questions
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/team" style={linkStyle}>
                                            CentileBrain Core Team
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}>
                                        <Link to="/publications" style={linkStyle}>
                                            CentileBrain Publications
                                        </Link>
                                    </Row>
                                    <Row style={rowStyle}></Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} md={1}></Grid>

                    <Grid item xs={12} md={4}>
                        <Grid item xs={12}></Grid>
                        <Grid item xs={12}>
                            <div
                                style={{
                                    textAlign: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Map />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </footer>
    );
}

export default Footer;
