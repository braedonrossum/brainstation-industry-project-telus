import React, { useState, useEffect } from 'react';
import './NavBar.scss';

const NavBarBundle = ({streams, details, setSite}) => {
const [selectedStream, setSelectedStream] = useState(streams[0]);

useEffect(() => {
    setSite(selectedStream);
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

export default NavBarBundle;
