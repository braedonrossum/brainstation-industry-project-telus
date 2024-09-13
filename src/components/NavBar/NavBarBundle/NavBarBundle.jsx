import React, { useState } from 'react';
import './NavBarBundle.scss';
import streamData from '../../../data/data.json'; 

const NavBarBundle = () => {
const [selectedStream, setSelectedStream] = useState(null);

const streams = [
{ name: 'Stream+ Basic', price: streamData.bundles.basic.price },
{ name: 'Stream+ Premium', price: streamData.bundles.premium.price }
];

const handleButtonClick = (stream) => {
setSelectedStream(stream);
};

return (
<div className="stream-selector">
    <div className="stream-tabs">
    {streams.map((stream) => (
        <button
        key={stream.name}
        className={`stream-tab ${selectedStream?.name === stream.name ? 'active' : ''}`}
        onClick={() => handleButtonClick(stream)}
        >
        {selectedStream?.name === stream.name ? `￥${stream.price}` : stream.name}
        </button>
    ))}
    </div>
    <div className="stream-details">
    {selectedStream && (
        <>
        <h2>{selectedStream.name}</h2>
        <p>
            {selectedStream.name === 'Stream+ Basic'
            ? streamData.bundles.basic['plan-description']
            : streamData.bundles.premium['plan-description']}
        </p>
        </>
    )}
    </div>
</div>
);
};

export default NavBarBundle;
