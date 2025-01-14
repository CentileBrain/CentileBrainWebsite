import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Map = () => {
    let map =
        "<a href='https://clustrmaps.com/site/1bw3d'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=500&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=005998'/></a>";
    let map2 =
        '<a href="https://www.revolvermaps.com/livestats/58oxjiie9qx/"><img src="//rf.revolvermaps.com/h/m/a/3/00ff6c/256/0/58oxjiie9qx.png" width="512" height="256" alt="Map" style="border:0;"></a>';
    let map3 = 
        "<a href='https://mapmyvisitors.com/web/1bxe2'  title='Visit tracker'><img src='https://mapmyvisitors.com/map.png?cl=ffffff&w=450&t=n&d=-GUhPO3DPtoufQvyW5I-7nFm3o4l1md0ZmxqtMLNspo&co=09263a&ct=ffffff'/></a>";
        return (
        <div>
            <p style={{ textAlign: 'center' }}>Interactive map of website visits</p>
            {/* {ReactHtmlParser(map)} */}
            {ReactHtmlParser(map3)}
        </div>
    );
};

export default Map;
