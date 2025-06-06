import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Tank.css"

export default function Tank() {
    return (
        <>
            <div class="tank">
                <h1>Tank Battle Royale</h1>
                <div class="tank-container">
                    <div>
                    <p2>A meticulously crafted battle royale with a tournament bracket system that enthusiastically brought over 50 university players into the arena of virtual warfare. Developed with the <b>Python language</b> and reinforced by the dynamic <b>Tank Wars Framework</b>, it goes beyond conventional gaming. With <b>Python 3.10</b> at its core, and enhanced by <b>pip's package management capabilities</b>, the project embraces custom scenarios and controllers for tailored gameplay experiences. But Tank Royale's true brilliance lies in empowering students to craft their own tanks, leveraging our comprehensive package to not only compete but also to innovate. This game is not just a convergence of strategy and coding, but also a vibrant communal platform that celebrates competition and camaraderie. A modest nod to the infinite horizons unlocked when technology weds passion.</p2>
<div>
<Button 
            variant="dark" 
            href="https://github.com/markknguyen/robot-wars" 
            target="_blank"
            style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
        >
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </Button>
    </div>
</div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JgDMZYPN7ro" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}