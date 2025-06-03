import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./ProjectPage.css"
import image15 from '../../assets/tank.png' // original tank image
import image2 from '../../assets/1526robot.png' // original robot image
import image3 from '../../assets/sweetdeals.png'
import image4 from '../../assets/asciibean.png'
import image5 from '../../assets/chair.png' // original chair image
import image6 from '../../assets/cfd.png' // original cfd image
import { FaChevronRight } from 'react-icons/fa';


export default function ProjectPage() {
    const navigate = useNavigate();

    const NavigateToTank = () => {
        navigate("/tank");
    }

    const NavigateToRobot = () => {
        navigate("/Robot");
    }

    const NavigateToSweet = () => {
        navigate("/sweet");
    }

    const NavigateToBean = () => {
        navigate("/bean");
    }

    const NavigateToChair = () => {
        navigate("/Chair");
    }

    const NavigateToCfd = () => {
        navigate("/Cfd");
    }

    return (
        <>
            <div id="project" className="project">
                <h1>Projects.</h1>
                <div className="project-container">

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Tank Battle Royale</Card.Title>
                            <Card.Text>
                            Where tanks meets passion in a battle royale arena, built for 50+ university students to learn Python and strategy.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToTank}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image15} alt="Tank Battle Royale" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>1526A</Card.Title>
                            <Card.Text>
                            Competing Robot project for VEX with a blend of Hardware and C++.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToRobot}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image2} alt="1526A Robot" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Ergonomic Musical Chair</Card.Title>
                            <Card.Text>
                            Mixing teenage engineering and my passion of violin to learn about CAD design.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToChair}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image5} alt="Ergonomic Musical Chair" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>SweetDeals</Card.Title>
                            <Card.Text>
                            A simple marketplace for trading Halloween candy built on Flutter and Dart.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToSweet}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image3} alt="SweetDeals" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>ASCII Bean</Card.Title>
                            <Card.Text>
                            Computatively visualizing the Chicago Bean's curves with C and matrix math.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToBean}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image4} alt="ASCII Bean" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>CFD Wind Tunnel</Card.Title>
                            <Card.Text>
                            Engineering team's scaled-down, open-loop wind tunnel for TSA club and aerodynamic flow visualization.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToCfd}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image6} alt="CFD Wind Tunnel" />
                    </Card>
                </div>
            </div>
        </>
    );
}