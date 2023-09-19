import React from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.css";
import "./AboutPage.css";
import Headshot from "../../assets/MemojiHeadshot.png";
import TechStackImage from "../../assets/versespi.jpeg";
import BackgroundVideo from "../../assets/loopchicago.mp4";

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
                        <h4>Hey I'm Mark! I am an aspiring <span className="gradient-text">Software Engineer</span> and a sophomore at Illinois Institute of Technology.</h4>
                    </div>
                </div>

                {/* Second Column */}
                <div className="container2-2">
                    <div className="languages-box">
                        <h4 className="text-center"> <span className="gradient-text2">Languages</span></h4>
                        <p>Python, Java, JavaScript, OCaml, Matlab, HTML, C, CSS, Dart, Kotlin</p>
                    </div>
                    <div className="framework-box">
                    <video autoPlay loop muted playsInline className="framework-video">
    <source src={BackgroundVideo} type="video/mp4" />
    Your browser does not support the video tag.
</video> <div class="framework-content">
                        <h4 className="text-center"> <span className="gradient-text3">Frameworks & Technologies</span></h4>
                        <p>Express.js, AngularJS, Node.js, React.js, Bootstrap, Flask, MongoDB, Amazon Web Services (AWS), Firebase, Heroku, Docker, Git, Github</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
