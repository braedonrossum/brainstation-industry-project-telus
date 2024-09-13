import "./BundleDetails.scss";

function BundleDetails({ bundleObject }) {
	const planDescription = bundleObject["plan-description"];
	const descriptionItems = Array.isArray(planDescription)
		? planDescription
		: [planDescription];

	return (
		<div className="bundle-details">
			<ul>
				{descriptionItems.map((point, index) => (
					<li className="bundle-details__info" key={index}>
						{point}
					</li>
				))}
			</ul>
		</div>
	);
}

export default BundleDetails;
