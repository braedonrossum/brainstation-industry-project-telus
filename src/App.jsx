
import './App.scss'
import Button from './components/Button/Button'
import BundleDetails from './components/BundleDetails/BundleDetails'
import BundleData from './data/data.json'
import { useState } from 'react';

import NavBarBundleRender from './components/NavBarRender/NavBarBundleRender'
import NavBarStreamSiteRender from './components/NavBarRender/NavBarStreamSiteRender'
import CustomerSupport from './components/CustomerSupport/CustomerSupport'



function App() {
  // const [selectBundle, setSelectBundle] = useState('basic');
  // const [isOpen, setIsOpen] = useState(false);
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
{/* 
      <div className="" onClick={() => setIsOpen(true)}>
        <img src="" alt="Raccoon image" />
      </div>
      {isOpen && <CustomerSupport setIsOpen={setIsOpen} />} */}
    </div>
  )
}

export default App
