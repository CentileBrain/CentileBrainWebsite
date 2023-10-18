import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Map = () => {
    let map = "<a href='https://clustrmaps.com/site/1bw3d'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=500&t=n&d=_87YyRVEFCeXP807NcNBvqGZhHxg5VU2ynROMMrqq6I&co=005998'/></a>"
    let map2 = '<a href="https://www.revolvermaps.com/livestats/58vxb7zqcn5/"><img src="//rf.revolvermaps.com/h/m/a/3/00ff6c/216/0/58vxb7zqcn5.png" width="432" height="216" alt="Map" style="border:0;"></a>'
    return (
    <div>
      {/* {ReactHtmlParser(map)} */}
      {ReactHtmlParser(map2)}
    </div>
  );
};

export default Map;
