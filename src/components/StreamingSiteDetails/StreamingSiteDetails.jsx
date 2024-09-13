import "../StreamingSiteDetails/StreamingSiteDetails.scss";
import data from "../../data/data.json";
import disney_img from "../../assets/disney.png";
import netflix_img from "../../assets/netflix.png";
import TELUS_TV_img from "../../assets/TELUS_TV.jpg";
import amazon_img from "../../assets/amazonprime.png";
import BundleDetails from "../BundleDetails/BundleDetails";

function StreamingSiteDetails({ plan, site = "netflix" }) {
	let img = netflix_img;
	if (site == "disney-plus") {
		img = disney_img;
	} else if (site == "amazon") {
		img = amazon_img;
	} else if (site == "telus-tv") {
		img = TELUS_TV_img;
	}

	return (
		<div className="streaming-details">
			<div className="streaming-details__bundle-details">
				<div className="streaming-details__site-details">
					<div className="streaming-details__img-container">
						<img className="streaming-details__img" src={img}></img>
					</div>
					<p>{data.bundles.basic["streaming-sites"][site].description}</p>
					<div className="streaming-details__button-space">
						<button className="streaming-details__value-button">
							{site === "telus-tv"
								? `Included`
								: `Value of ${data.bundles[plan]["streaming-sites"][site]["retail-price"]}`}
						</button>
					</div>
				</div>
				<BundleDetails bundleObject={data.bundles[plan]} />
			</div>
		</div>
	);
}

export default StreamingSiteDetails;
