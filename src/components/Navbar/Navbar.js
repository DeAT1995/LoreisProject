import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoLoreis from '../../images/logoLoreisTransparent.png'
import '../Navbar/Navbar.css'

function NavbarComponent() {
  return (
    <Navbar expand="lg" variant="light" bg="light">
   
      <Container>
        <Navbar.Brand href="#">
            <img src={LogoLoreis} alt="logo" roundedCircle />
            </Navbar.Brand>
        <NavDropdown title="Menu" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sobre mim
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Plataformas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;