import { Col, Row } from 'antd';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

const BACKGROUND_IMAGE_URL =
    'https://centilebrainwebsiteimage.s3.us-east-1.amazonaws.com/background.png';

function Banner(props) {
    // State to track if the image has finished downloading
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // 1. Create a virtual image instance
        const img = new Image();
        img.src = BACKGROUND_IMAGE_URL;

        // 2. Once the browser has the data, set state to true
        img.onload = () => {
            setIsLoaded(true);
        };
    }, []);

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
            {/* LAYER 1: The Image Background */}
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

                    // 3. Animation Logic
                    // Start at opacity 0. When isLoaded becomes true, switch to 1.
                    opacity: isLoaded ? 1 : 0,
                    transition: 'opacity 1.5s ease-in-out',
                    willChange: 'opacity',
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