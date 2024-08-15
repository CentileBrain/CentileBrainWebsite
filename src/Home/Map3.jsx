import React, { useEffect } from 'react';

const Map = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'clustrmaps';
        script.src =
            '//cdn.clustrmaps.com/map_v2.js?cl=ffffff&w=500&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=005998';
        script.async = true;
        script.defer = true;

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []); // Empty dependency array means this effect runs once after the initial render

    return <div></div>;
};

export default Map;
