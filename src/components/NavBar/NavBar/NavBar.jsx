import React, { useState, useEffect } from 'react';
import './NavBar.scss';

const NavBar = ({streams, details, setSite}) => {
const [selectedStream, setSelectedStream] = useState(streams[0]);

    let site ='netflix';
if (selectedStream === 'Netflix'){
    site='netflix';
} else if (selectedStream==='Disney+') {
    site ='disney-plus' 
}else if (selectedStream=== 'Amazon Prime'){
    site ='amazon';}
else if (selectedStream === 'Telus TV'){
    site ='telus-tv';
}

useEffect(() => {
    if(setSite){
        setSite(site);
    }
}, [selectedStream]);


return (
<div className="stream-selector">
    <div className="stream-tabs">
    {streams.map((stream) => (
        <button
        key={stream}
        className={`stream-tab ${selectedStream === stream ? 'active' : ''}`}
        onClick={() => setSelectedStream(stream)}
        >
        {stream}
        </button>
    ))}
    </div>
    <div className="stream-details">
        <h2>{selectedStream}</h2>
        <p>{details[selectedStream]}</p>
    </div>
</div>
);
};

export default NavBar;
