import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Bean.css"

export default function Bean() {
    return (
        <>
            <div class="bean">
                <h1>Bean</h1>
                <div class="bean-container">
                    <div>
                    <p>Well, suppose you're wandering around Chicago and you bump into this curiously shiny sculpture called the 'Bean.' A shimmering delight, right? Now imagine, for a moment, that we could capture its essence, not with brushes or cameras, but with ASCII characters.
                         Quite the fun puzzle! So, embarking on this challenge, I created a rotating 3D representation of this Bean using a crafty blend of framebuffer and a Z-buffer, rendering pixels to evoke the very essence of its curvatures.
                          How, you ask? The secret lies in plotting pixels dense enough to seem solid on our ASCII canvas, making our 'Bean' come alive with characters ranging from the dim '.' to the bright '@'.
                           To bring this vision to fruition, I leaned on C language and an interactive spin using JavaScript. The computation of pixel densities, vital for the ASCII representation, is deeply rooted in linear interpolation.
                             By calculating the light reflection off the surface using the Lambertian reflectance model, I could map the different shades of brightness to appropriate ASCII characters. The result? An ASCII Bean, rotating with all its 3D glory, without a single trace of a donut.
                              Voila! A touch of the Windy City right on your screen!</p>
                              <Button 
    variant="dark" 
    href="https://github.com/markknguyen/robot-wars" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
<FontAwesomeIcon className="github-icon" icon={faGithub} />
</Button>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nPWsnvU-9Sc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </>
    );
}