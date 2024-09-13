
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
                    {selectedStream?.name === stream.name ? `$${stream.price}` : stream.name}
                    </button>
                ))}
            </div>
            <div className="stream-details">
                {selectedStream && (
                    <>
                        <h2>{selectedStream.name}</h2>
                        {
                            selectedStream.name === 'Stream+ Basic'
                            ? <BundleDetails bundleObject={streamData.bundles.basic} />
                            : <BundleDetails bundleObject={streamData.bundles.premium}/>
                        }

                    </>
            )}
            </div>
        </div>
        );

}

export default NavBarBundle;