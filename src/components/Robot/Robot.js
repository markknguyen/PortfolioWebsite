import "./Robot.css"
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Robot() {
    return (
        <>
           <div class="robot">
                <h1>1526A</h1>
                <div class="robot-container">
                    <div>
                        <p2>From 2018 to 2022, as a key member of my high school <b>VEX Robotics</b> team, I played a significant role in navigating through various challenges using a combination of programming languages and frameworks. We utilized the <b>VEX Robotics coding language</b>, specifically designed for VEX systems, to effectively program our robot for diverse tasks each year. In challenges like <b>"Turning Point"</b> and <b>"Tower Takeover"</b>, our programming needed to be precise and adaptable.</p2>

                        <p2>In addition to the VEX Robotics coding language, we also explored <b>RobotC</b>, known for its versatility in robotics programming. This <b>C-based language</b> allowed us to develop more complex algorithms, enhancing our robot's performance in competitions. My responsibility in the team was crucial, aligning our programming strategies with our robot's <b>mechanical design</b> and competition objectives.</p2>

                        <p2>Our achievements included being consistent <b>tournament finalists</b>, winning several <b>design competitions</b>, and qualifying for <b>state levels</b>. This success was a direct result of the harmonious integration of <b>mechanical engineering</b> and <b>software development</b>. This period was about teamwork, innovation, and applying theoretical knowledge to real-world challenges.</p2>

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
                        src="https://www.youtube.com/embed/8z2N3Pn5LRU" 
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