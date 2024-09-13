import { useState } from 'react';
import NavBarStreamSiteRender from '../NavBarRender/NavBarStreamSiteRender'
import StreamingSiteDetails from '../StreamingSiteDetails/StreamingSiteDetails'

export default function StreamingSiteRender() {
    const streams = ['netflix', 'Disney+', 'Amazon', 'Telus'];
    const [site, setSite] = useState(streams[0]);

    return (
        <div>
            <NavBarStreamSiteRender  setSite={setSite}/>
            <StreamingSiteDetails site={site}/>
        </div>
    )
}
