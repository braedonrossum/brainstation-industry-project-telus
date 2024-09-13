import NavBar from "../NavBar/NavBar/NavBar";
import data from "../../data/data.json";


export default function NavBarStreamSiteRender({ setSite }) {
    const streams = ['Netflix', 'Disney+', 'Amazon', 'Telus'];
    const selectedStream = {
        'Netflix': '',
        'Disney+': '',
        'Amazon': '',
        'Telus': '',
    };
    return (
        <div>
            <NavBar
                streams={streams}
                details={selectedStream}
                setSite={setSite}
            />
        </div>
    )
}
