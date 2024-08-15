import React, { useEffect } from 'react';

const YourComponent = () => {
    useEffect(() => {
        // Create a script element
        const script = document.createElement('script');

        // Set the script source to the ClustrMaps URL
        script.src =
            '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=500&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=005998';
        script.async = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures that this effect runs once after the component mounts

    return <div>{/* Your component content goes here */}</div>;
};

export default YourComponent;
