import React from 'react';
import Features from './Features';

class FeaturesPage extends React.PureComponent {
    render() {
        return (
            <div className="home-page page1">
                <div className="home-page-wrapper" id="page1-wrapper">
                    {/* Optional: Keep the section title line if you like it */}
                    <div className="title-line-wrapper page1-line" style={{ marginTop: '20px' }}>
                        <div className="title-line" />
                    </div>
                    
                    {/* Render the unified modern grid */}
                    <Features />
                </div>
            </div>
        );
    }
}

export default FeaturesPage;