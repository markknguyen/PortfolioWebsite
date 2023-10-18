import "./Mean.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Mean() {
    return (
        <>
           <div class="mean">
                <h1>Untitled AI Project</h1>
                <div class="bean-container">
                    <div>
                    <p2>MERN Stack project. Coming soon.</p2>
<div>
                              <Button 
            variant="dark" 
            href="https://github.com/markknguyen" 
            target="_blank"
            style={{ fontSize: '2rem' }}
        >
            <FontAwesomeIcon className="github-icon" icon={faGithub} />
        </Button>
        </div>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ARJ8cAGm6JE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}