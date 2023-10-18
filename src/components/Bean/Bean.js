import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';
import "./Bean.css"

export default function Bean() {
    return (
        <>
            <div class="bean">
                <h1>ASCII Bean</h1>
                <div class="bean-container">
                    <div>
                    <p2>Well, suppose you're wandering around Chicago and you bump into this curiously shiny sculpture called the 'Bean.' A shimmering delight, right? Now imagine, for a moment, that we could capture its essence, not with brushes or cameras, but with <b>ASCII characters</b>.
                         Quite the fun puzzle! So, embarking on this challenge, I created a rotating <b>3D representation</b> of this Bean using a crafty blend of <b>framebuffer</b> and a <b>Z-buffer</b>, <b>rendering pixels</b> to evoke the very essence of its curvatures.
                          How, you ask? The secret lies in <b>plotting pixels</b> dense enough to seem solid on our <b>ASCII canvas</b>, making our 'Bean' come alive with characters ranging from the dim '.' to the bright '@'.
                           To bring this vision to fruition, I leaned on <b>C language</b> and an interactive spin using <b>JavaScript</b>. The computation of <b>pixel densities</b>, vital for the <b>ASCII representation</b>, is deeply rooted in <b>linear interpolation</b>.
                             By calculating the light reflection off the surface using the <b>Lambertian reflectance model</b>, I could map the different shades of brightness to appropriate <b>ASCII characters</b>. The result? An <b>ASCII Bean</b>, rotating with all its <b>3D glory</b>, without a single trace of a donut.
                              Voila! A touch of the Windy City right on your screen!</p2>
                              <div>
                        <Button 
    variant="dark" 
    href="https://github.com/Dodhon/DemonHacks2022" 
    target="_blank"
    style={{ fontSize: '2rem' }}  // Adjusting font size to fit container
>
<FontAwesomeIcon className="github-icon" icon={faGithub} />
</Button>
                        </div>
                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/QsVFgvpkiCg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>                </div>
            </div>
        </>
    );
}