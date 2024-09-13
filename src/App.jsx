import "./App.scss";
import Button from "./components/Button/Button";
import BundleDetails from "./components/BundleDetails/BundleDetails";
import BundleData from "./data/data.json";
import { useState } from "react";

// import NavBarBundle from "./components/NavBar/NavBarBundle/NavBarBundle";
// import StreamingSiteDetails from "./components/StreamingSiteDetails/StreamingSiteDetails";
import NavBarBundleRender from "./components/NavBarRender/NavBarBundleRender";
import NavBarStreamSiteRender from "./components/NavBarRender/NavBarStreamSiteRender";

function App() {
	// const [selectBundle, setSelectBundle] = useState('basic');
	// const handleBundleChange = (event) => {
	//   setSelectBundle(event.target.value)
	// }

	return (
		<div>
			{/* <NavBarBundleRender />
      <NavBarStreamSiteRender />
      <BundleDetails bundleObject={BundleData.bundles.premium} /> */}
			{/* {selectedBundle === 'basic' && (
        <BundleDetails bundleObject={bundleData.bundles.basic} />
      )}

      {selectedBundle === 'premium' && (
        <BundleDetails bundleObject={bundleData.bundles.premium} />
      )} */}
		</div>
	);
}

export default App;
