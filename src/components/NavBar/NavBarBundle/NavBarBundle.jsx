import React, { useState } from 'react';
import './NavBarBundle.scss';
import streamData from '../../../data/data.json'; 
import BundleDetails from '../../BundleDetails/BundleDetails';

function NavBarBundle(){
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
                        {stream.name}
                    </button>
                ))}
            </div>
            <div className="stream-details">
                {selectedStream && (
                    <>
                        <button className="price-button">
                            ${selectedStream.price}
                        </button>
                        
                        {
                            selectedStream.name === 'Stream+ Basic'
                            ? <BundleDetails bundleObject={streamData.bundles.basic} />
                            : <BundleDetails bundleObject={streamData.bundles.premium} />
                        }
                    </>
                )}
            </div>
        </div>
    );
}

export default NavBarBundle;
