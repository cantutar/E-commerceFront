import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDarkMode } from "../store/dark-mode-context";

function Navi() {
  const { darkMode, ToggleDarkMode } = useDarkMode();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={darkMode ? "light" : "dark"}
      variant={darkMode ? "light" : "dark"}
    >
      <Container>
        <Navbar.Brand href="#home">BlankTemplate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link onClick={ToggleDarkMode}>
              {darkMode ? "🌑" : "☀️"}
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
