// ClustrmapsComponent.jsx
import React from 'react';

class Map extends React.Component {
    componentDidMount() {
        console.log('Component did mount');
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'clustrmaps';
        script.src =
            '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=500&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=005998';

        script.onload = () => {
            // The script has been successfully loaded, you can now initialize Clustrmaps
            this.initClustrmaps();
        };

        document.head.appendChild(script);
    }
    initClustrmaps() {
        // If ClustrMap is the correct global variable provided by the Clustrmaps script
        if (window.ClustrMap) {
            // Example initialization, make sure to use the correct API provided by Clustrmaps
            window.ClustrMap.Init();
        }
    }

    render() {
        return <div>{/* Additional JSX content if needed */}</div>;
    }
}

export default Map;
