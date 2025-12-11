import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const BACKGROUND_IMAGE_URL =
    'https://centilebrainwebsiteimage.s3.us-east-1.amazonaws.com/background.png';

function Banner(props) {
    return (
        <div
            style={{
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
            }}
        >
            {/* LAYER 1: The Image Background - Fits within frame */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                }}
            />

            {/* No Overlay and No Content */}
        </div>
    );
}

Banner.propTypes = {
    isMobile: PropTypes.bool.isRequired,
};

export default Banner;
