import { useState } from 'react';
import NavBarStreamSiteRender from '../NavBarRender/NavBarStreamSiteRender'
import StreamingSiteDetails from '../StreamingSiteDetails/StreamingSiteDetails'

export default function StreamingSiteRender() {
    const streams = ['Netflix', 'Disney+', 'Amazon Prime', 'Telus'];
    const [site, setSite] = useState(streams[0]);
    const dataReference = {
        'Netflix': 'netflix',
        'Disney+': 'disney-plus',
        'Amazon Prime': 'amazon',
        'Telus': 'telus-tv',
    };

    let siteData = dataReference[site];
    console.log(siteData);

    return (
        <div>
            <NavBarStreamSiteRender  setSite={setSite}/>
            <StreamingSiteDetails site={siteData}/>
        </div>
    )
}
