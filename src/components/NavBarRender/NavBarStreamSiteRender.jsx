import NavBar from "../NavBar/NavBar/NavBar";
import data from "../../data/data.json";


export default function NavBarStreamSiteRender() {
    const streams = ['Netflix', 'Disney+', 'Amazon', 'Telus'];
    const selectedStream = {
        'Netflix': data.bundles.basic['streaming-sites'].netflix.description,
        'Disney+': data.bundles.basic['streaming-sites']['disney-plus'].description,
        'Amazon': data.bundles.basic['streaming-sites'].amazon.description,
        'Telus': data.bundles.basic['streaming-sites']['telus-tv'].description,
    };
    return (
        <div>
            <NavBar
                streams={streams}
                details={selectedStream}
            />
        </div>
    )
}
