import "./App.scss";
import Button from "./components/Button/Button";
import BundleDetails from "./components/BundleDetails/BundleDetails";
import BundleData from "./data/data.json";
import NavBar from "./components/NavBar/NavBar/NavBar";
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
import { useState } from "react";

import NavBarBundle from "./components/NavBar/NavBarBundle/NavBarBundle";
import StreamingSiteDetails from "./components/StreamingSiteDetails/StreamingSiteDetails";
import NavBarBundleRender from "./components/NavBarRender/NavBarBundleRender";
import NavBarStreamSiteRender from "./components/NavBarRender/NavBarStreamSiteRender";
import StreamingSiteRender from "./components/StreamingSiteRender/StreamingSiteRender";
import raccoon from "./assets/Raccoon-help.png";
function App() {
	const [selectedBundle, setSelectBundle] = useState("basic");
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bundle-wrapper">
			<NavBarBundle selectBundle={setSelectBundle} />
			<StreamingSiteRender currentBundle={selectedBundle} />
			<div className="modal-icon">
				<img src={raccoon} alt="icon raccoon" onClick={() => setIsOpen(true)} />
			</div>
			{isOpen && <CustomerSupport setIsOpen={setIsOpen} />}
		</div>
	);
}

export default App;
