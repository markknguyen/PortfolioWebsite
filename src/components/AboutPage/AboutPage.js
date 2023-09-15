import React from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css";
import Headshot from "../../assets/MemojiHeadshot.png";
import TechStackImage from "../../assets/versespi.jpeg";

export default function AboutPage() {
    return (
        <div id="about" className="about">
            <h1>About me.</h1>
            
            <div className="about-container">
                {/* First Column */}
                <div className="container2-1">
                    <div className="long-box">
                        <Image
                            className="headshot"
                            src={Headshot}
                            alt="Mark Nguyen"
                        />
                    </div>
                    <div className="short-box">
                        <h4>Hello, my name is Mark Nguyen. I am a sophomore at <span className="gradient-text">Illinois Institute of Technology</span> studying Computer Science.</h4>
                    </div>
                </div>

                {/* Second Column */}
                <div className="container2-2">
                    <div className="languages-box">
                        <h4 className="text-center"> <span className="gradient-text2">Languages</span></h4>
                        <p>Python, Java, JavaScript, OCaml, Matlab, HTML, C, CSS, Dart, Kotlin</p>
                    </div>
                    <div className="framework-box">
                        <h4 className="text-center"> <span className="gradient-text3">Frameworks & Technologies</span></h4>
                        <p>Frameworks: Express.js, AngularJS, Node.js, React.js, Bootstrap, Flask, MongoDB, Amazon Web Services (AWS), Firebase, Heroku, Docker, Git, Github</p>
                        <Image
                            src={TechStackImage}
                            alt="Tech Stack"
                            className="tech-stack-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
