import React, { useState } from 'react';
import './NavBarBundle.scss';
import streamData from '../../../data/data.json'; 

const NavBarBundle = () => {
    const [selectedStream, setSelectedStream] = useState(null);
    const [showPrice, setShowPrice] = useState(false);


    const streams = [
        { name: 'Stream+ Basic', price: streamData.bundles.basic.price },
        { name: 'Stream+ Premium', price: streamData.bundles.premium.price }
    ];

    const handleButtonClick = (streamName) => {
        setSelectedStream(streamName);
        setShowPrice(true); 
    };

    return (
        <div className="stream-selector">
        <div className="stream-tabs">
            {streams.map((stream) => (
            <button
                key={stream.name}
                className={`stream-tab ${selectedStream === stream.name ? 'active' : ''}`}
                onClick={() => handleButtonClick(stream.name)}
            >
                {selectedStream === stream.name && showPrice ? `$${stream.price}` : stream.name}
            </button>
            ))}
        </div>
        <div className="stream-details">
            <h2>{selectedStream}</h2>
            {selectedStream === 'Stream+ Basic' && (
            <p>{streamData.bundles.basic['plan-description']}</p>
            )}
            {selectedStream === 'Stream+ Premium' && (
            <p>{streamData.bundles.premium['plan-description']}</p>
            )}
        </div>
        </div>
    );
};

export default NavBarBundle;
