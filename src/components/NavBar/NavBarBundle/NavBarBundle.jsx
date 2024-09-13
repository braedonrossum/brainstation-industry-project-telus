import React, { useState } from 'react';
import './NavBarBundle.scss';

const NavBarBundle = () => {
const [SelectedStream, setSelectedStream] = useState('Stream+ Basic');

const streams = ['Stream+ Basic', 'Stream+ Premium'];

return (
<div className="stream-selector">
    <div className="stream-tabs">
    {streams.map((stream) => (
        <button
        key={stream}
        className={`stream-tab ${SelectedStream === stream ? 'active' : ''}`}
        onClick={() => setSelectedStream(stream)}
        >
        {stream}
        </button>
    ))}
    </div>
    <div className="stream-details">
    <h2>{SelectedStream}</h2>
    {SelectedStream === 'Stream+ Basic' && <p>Details </p>}
    {SelectedStream === 'Stream+ Premium' && <p>Details </p>}
    </div>
</div>
);
};

export default NavBarBundle;
