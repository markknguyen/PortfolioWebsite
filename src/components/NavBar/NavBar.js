import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
    <Navbar className="transparent-navbar" variant="light" collapseOnSelect expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">Mark Nguyen</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="nav-bar-collapse">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
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

