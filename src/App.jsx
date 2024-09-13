
import './App.scss'
import Button from './components/Button/Button'
import BundleDetails from './components/BundleDetails/BundleDetails'
import BundleData from './data/data.json'
import {useState} from 'react';

import NavBarBundle from './components/NavBar/NavBarBundle/NavBarBundle'

function App() {
  const [selectBundle, setSelectBundle] = useState('basic');
  const handleBundleChange = (event) =>{
    setSelectBundle(event.targer.value)
  }



  return (
    <div>
      
     
      <NavBarBundle />
      <BundleDetails bundleObject = {BundleData.bundles.premium} />
       {/* {selectedBundle === 'basic' && (
        <BundleDetails bundleObject={bundleData.bundles.basic} />
)}

{selectedBundle === 'premium' && (
  <BundleDetails bundleObject={bundleData.bundles.premium} />
)} */}
    </div>
  )
}

export default App
