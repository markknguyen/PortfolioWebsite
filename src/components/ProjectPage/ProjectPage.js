import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "./ProjectPage.css"
import image15 from '../../assets/robot.png'
import image2 from '../../assets/untitled.png'
import image3 from '../../assets/sweetdeals.png'
import image4 from '../../assets/untitled.png'
import { FaChevronRight } from 'react-icons/fa';


export default function ProjectPage() {
    const navigate = useNavigate();

    const NavigateToTank = () => {
        navigate("/tank");
    }

    const NavigateToMEAN = () => {
        navigate("/mean");
    }

    const NavigateToSweet = () => {
        navigate("/sweet");
    }

    const NavigateToBean = () => {
        navigate("/bean");
    }

    return (
        <>
            <div id="project" className="project">
                <h1>Projects.</h1>
                <div className="project-container">

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>ASCII Bean</Card.Title>
                            <Card.Text>
                            Exploring the Chicago Bean's curves with C and matrix math.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToBean}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image4} alt="ASCII Bean" />
                    </Card>
   
                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>SweetDeals</Card.Title>
                            <Card.Text>
                            A simple marketplace for trading Halloween candy built on Flutter and Firebase.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToSweet}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image3} alt="SweetDeals" />
                    </Card>
                
                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Web Application</Card.Title>
                            <Card.Text>
                            Something to do with MEAN stack.
                            </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToMEAN}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image2} alt="MEAN" />
                    </Card>

                    <Card bg="dark">
                        <Card.Body>
                            <Card.Title>Tank Battle Royale</Card.Title>
                            <Card.Text>
                            Where Python meets passion in a battle royale arena, crafting tanks and forging champions.                        </Card.Text>
                            <Card.Link variant="primary" onClick={NavigateToTank}>Learn more <FaChevronRight /></Card.Link>
                        </Card.Body>
                        <Card.Img variant="top" src={image15} alt="Tank Battle Royale" />
                    </Card>
                </div>
            </div>
        </>
    );
}