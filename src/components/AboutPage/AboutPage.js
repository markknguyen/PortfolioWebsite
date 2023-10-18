import React from "react";
import Image from "react-bootstrap/Image";
import "./AboutPage.css";
import Headshot from "../../assets/MemojiHeadshot.png";
import Vietnam from "../../assets/viet-2.png"

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
                    <h4 className="text-center"> 
                            <span className="gradient-text">19</span>
                        </h4>
                        <h4> <span className="white-text"> years old. </span> (Sophomore!).</h4>
                    </div>
                </div>

                {/* Second Column */}
                <div className="container2-2">
                    <div className="about-box">
                        <h4>Hey I'm <span className="white-text">Mark!</span> 👋 I am an aspiring <span className="gradient2-text">Software Engineer</span> and a student at Illinois Institute of Technology.</h4>
                    </div>
                    <div className="framework-box">
                        
                        <div className="framework-content">
                            <h4>First-generation</h4>
                            <h4><span className="white-text"><span className="gradient2-text">Vietnamese</span>-American.</span></h4>
                            <h4>🇻🇳🇺🇸</h4>
                            <Image
                            src={Vietnam}
                            alt="Vietnam"
                            className="vietnam-image" // You might need to add some CSS for this
                        />
                        </div>
                        </div>
                        
                </div>
        </div>
        <div className="new-box-container"> {/* New container for the two boxes */}
                        <div className="new-box2">
                                <h4 className="text-center">
                                <span className="gradient2-text">Frameworks</span>
                                </h4>
                                <p>
                                <span className="white-text">Express.js, Node.js,</span> and <span className="white-text">Flask</span> are backend web development frameworks, while <span className="white-text">AngularJS, React.js,</span> and <span className="white-text">Bootstrap</span> are primarily used for frontend development. These popular software development frameworks were studied through personal projects. <span className="white-text">TensorFlow</span> and <span className="white-text">Pytorch</span> are machine learning libraries that were delved into during my time at Argonne National Laboratory. Technologies like <span className="white-text">Azure, AWS, Firebase,</span> and <span className="white-text">Heroku</span> focus on cloud services & platforms and were explored in depth through IT online courses and hackathon projects. <span className="white-text">MongoDB</span>, a notable database technology, was also covered during time at NASA.</p>
                                </div>
                                <div className="new-box1">
                                <h4 className="text-center"> 
                                <span className="gradient2-text">Languages</span>
                                </h4>
                                <p><span className="white-text"> Python, Java </span> , and <span className="white-text"> C++ </span>
                                are Object-Oriented Programming languages that were studied in the university's Computer Science courses. Web development
                                languages, specifically <span className="white-text"> HTML</span> and 
                                <span className="white-text"> CSS</span>,
                                were learned in the university's Communication courses. Scripting languages
                                such as <span className="white-text">JavaScript, C,</span> and
                                <span className="white-text"> Matlab </span>
                                were acquired during research conducted at the
                                University/National Laboratory.</p>
                                </div> 
        </div>
        </div>
    );
}

