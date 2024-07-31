import { useState, useEffect } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onUpdateActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-custom ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src="https://via.placeholder.com/40/007bff/fff?text=Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          Official Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Link to="/contact" className="me-4">
          <Button
            variant="primary"
            className="btn"
            onClick={() => console.log("connect")}
          >
            <span>Let's Connect</span>
          </Button>
          </Link>
          <Link to="/signup" className="me-4">
              <Button
                variant="primary"
                className="btn"
                onClick={() => console.log("sign up")}
              >
                <span>Sign Up</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="primary"
                className="btn"
                onClick={() => console.log("log in")}
              >
                <span>Log In</span>
              </Button>
            </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
