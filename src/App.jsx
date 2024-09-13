import "./App.scss";
import Button from "./components/Button/Button";
import BundleDetails from "./components/BundleDetails/BundleDetails";
import BundleData from "./data/data.json";
import NavBar from "./components/NavBar/NavBar/NavBar";
import { useState } from "react";

import NavBarBundle from "./components/NavBar/NavBarBundle/NavBarBundle";
import StreamingSiteDetails from "./components/StreamingSiteDetails/StreamingSiteDetails";
import NavBarBundleRender from "./components/NavBarRender/NavBarBundleRender";
import NavBarStreamSiteRender from "./components/NavBarRender/NavBarStreamSiteRender";
import StreamingSiteRender from "./components/StreamingSiteRender/StreamingSiteRender";

function App() {
  const [selectBundle, setSelectBundle] = useState('basic');
  const handleBundleChange = (event) => {
    setSelectBundle(event.target.value)
  }

  return (
    <div>
      <NavBarBundle />
      {/* <NavBarBundleRender /> */}
      {/* <NavBarStreamSiteRender /> */}
      {/* <BundleDetails bundleObject={BundleData.bundles.premium} /> */}
      {/* {selectBundle === 'basic' && (
        <BundleDetails bundleObject={BundleData.bundles.basic} />
      )} */}

      {/* {selectBundle === 'premium' && (
        <BundleDetails bundleObject={BundleData.bundles.premium} />
      )} */}
      <StreamingSiteRender />
      
    </div>
  );
}

export default App;
