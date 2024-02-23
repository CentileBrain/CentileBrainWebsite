import React, { useEffect } from 'react';
//<script type="text/javascript" src="//rf.revolvermaps.com/0/0/1.js?i=5hzi3da1uif&amp;s=220&amp;m=0&amp;v=false&amp;r=false&amp;b=000000&amp;n=false&amp;c=ff0000" async="async"></script>
function Map() {
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
    <div id="mapContainer">
    </div>
  );
};

export default Map;
