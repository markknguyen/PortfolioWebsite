import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"
import logo from '../../assets/logo.png';

export default function NavBar() {
  return (
    <>
    <Navbar className="transparent-navbar" variant="dark" collapseOnSelect expand="lg" sticky="top">
        <Container>
        <Navbar.Brand href="/PortfolioWebsite">
        <img src={logo} alt="Mark Nguyen Logo" className="d-inline-block" />
    </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="nav-bar-collapse">
            <Nav className="me-auto">
              <Nav.Link href="/PortfolioWebsite">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#project">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

