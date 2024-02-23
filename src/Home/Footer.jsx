import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import Map from './Map2';
import { useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

function Footer() {
    const linkStyle = { textDecoration: 'none', color: 'white', textAlign: 'left' };
    const rowStyle = { paddingTop: '20px', textAlign: 'left'  };
    useEffect(() => {
        // Add your script here
        const script = document.createElement('script');
        script.src = '//rf.revolvermaps.com/0/0/1.js?i=5hzi3da1uif&amp;s=220&amp;m=0&amp;v=false&amp;r=false&amp;b=000000&amp;n=false&amp;c=ff0000';
        script.async = true;
        // Load the script inside the specific div with the id "mapContainer"
        const mapContainer = document.getElementById('mapContainer');
        if (mapContainer) {
          mapContainer.appendChild(script);
        }
        return () => {
          // Remove the script when the component unmounts
          if (mapContainer && mapContainer.contains(script)) {
            mapContainer.removeChild(script);
            }
          };
        }, []);
    return (
        <footer id="footer" className="dark" style={{ background: '#001529', color: 'white' , paddingTop: '20px'}}>
        <div style={{ paddingLeft: '2rem', paddingRight: '2rem'}}>
            <Grid container spacing={5} alignItems={'stretch'} justifyContent={'center'}>
                <Grid item xs={12} md={4}>
                    <Grid item xs={12} justifyContent={'center'}>
                    <Row gutter={[15, 15]} style={{paddingLeft: '30px'}}>
                            <Col span={12}>
                                <Row style={rowStyle}><Link to="/explore" style={linkStyle}>Explore the CentileBrain Dataset</Link></Row>
                                <Row style={rowStyle}><Link to="/model" style={linkStyle}>Use CentileBrain to Generate Estimates</Link></Row>
                                <Row style={rowStyle}><Link to="/model2" style={linkStyle}>The CentileBrain Model</Link></Row>
                                <Row style={rowStyle}><Link to="/team" style={linkStyle}>CentileBrain Development Team</Link></Row>
                            </Col>
                            <Col span={12} style={{paddingLeft: '20px'}}>
                                <Row style={rowStyle}><Link to="/publications" style={linkStyle}>CentileBrain Publications</Link></Row>
                                <Row style={rowStyle}><Link to="/brainAGE" style={linkStyle}>The BrainAGE Model</Link></Row>
                                <Row style={rowStyle}><Link to="/engima" style={linkStyle}>Learn More About ENIGMA Consortium</Link></Row>
                                <Row style={rowStyle}></Row>

                            </Col>
                        </Row>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={1}>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Grid item xs={12}>
                        
                    </Grid>
                        <Grid item xs={12}>
                            
                            {/* <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Map />
                            </div> */}
                            <div id="mapContainer">

                            </div>
                        </Grid>
                </Grid>

                

            </Grid>
            </div>
        </footer>
    );
}

export default Footer;
