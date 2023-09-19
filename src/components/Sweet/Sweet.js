import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Sweet.css"

export default function Sweet() {
    return (
        <>
            <div class="sweet">
                <h1>Challenge with Friends</h1>
                <div class="sweet-container">
                    <div>
                        <p>Yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap, yap,</p>
                        <Button 
    variant="dark" 
    href="https://github.com/markknguyen/robot-wars" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
<FontAwesomeIcon className="github-icon" icon={faGithub} />
</Button>

                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=FT_2f0RwoIQ&t=73s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}