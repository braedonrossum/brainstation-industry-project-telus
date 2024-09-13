import React from 'react'
import NavBar from '../NavBar/NavBar/NavBar'

export default function NavBarBundleRender() {
    const streams = ['Stream+ Basic', 'Stream+ Premium'];
    const selectedStream = {
        'Stream+ Basic': 'Basic package details.',
        'Stream+ Premium': 'Premium package details.'
    }

    return (
        <div>
            <NavBar
                streams={streams}
                details={selectedStream}
            />
        </div>
    )
}
