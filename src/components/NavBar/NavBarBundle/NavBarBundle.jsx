import React, { useState } from "react";
import "./NavBarBundle.scss";
import streamData from "../../../data/data.json";
// import BundleDetails from '../../BundleDetails/BundleDetails';

function NavBarBundle({ selectBundle }) {
	const [selectedStream, setSelectedStream] = useState({
		name: "Stream+ Basic",
		price: streamData.bundles.basic.price,
	});

	const streams = [
		{ name: "Stream+ Basic", price: streamData.bundles.basic.price },
		{ name: "Stream+ Premium", price: streamData.bundles.premium.price },
	];

	const handleButtonClick = (stream) => {
		setSelectedStream(stream);
		selectedStream.name === "Stream+ Basic"
			? selectBundle("premium")
			: selectBundle("basic");
	};

	return (
		<div className="stream-selector">
			<div className="stream-tabs">
				{streams.map((stream) => (
					<button
						key={stream.name}
						className={`stream-tab ${
							selectedStream?.name === stream.name ? "active" : ""
						}`}
						onClick={() => handleButtonClick(stream)}
					>
						{stream.name}
					</button>
				))}
			</div>
			<div className="stream-details">
				{selectedStream && (
					<>
						<button className="price-button">${selectedStream.price}</button>
					</>
				)}
			</div>
		</div>
	);
}

export default NavBarBundle;
