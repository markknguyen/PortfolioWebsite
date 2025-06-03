import "./Cfd.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Cfd() {
    return (
        <>
           <div class="cfd">
                <h1>CFD Wind Tunnel</h1>
                <div class="cfd-container">
                    <div>
                        <p2>As part of our high school engineering team's initiative, we embarked on an ambitious project to construct a scaled-down, <b>open-loop wind tunnel</b>, aimed at providing tangible insights into the aerodynamic principles of drag. This endeavor was undertaken for our <b>Technology Student Association (TSA)</b> club, specifically to aid in the visualization of <b>aerodynamic flow</b> around <b>CO2-powered model cars</b>. Embracing the challenge, we delved into the complexities of <b>Autodesk CFD Inventor</b>, leveraging its robust capabilities to design our wind tunnel. The structure was meticulously crafted from <b>wood</b>, ensuring both durability and precision. Our project culminated in a presentation at the local <b>community science fair</b>, where we had the privilege of engaging with families and children passionate about <b>STEM</b>. This project not only served as a practical learning tool for our peers but also stands out as one of my most cherished personal achievements, epitomizing the fusion of theoretical knowledge and hands-on creativity.</p2>

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
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/-9o_d-A_T5k" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </div>
            </div>
        </>
    );
} 