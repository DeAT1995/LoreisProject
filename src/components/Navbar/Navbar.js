import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoLoreis from '../../images/logoLoreisTransparent.png'

function NavbarComponent() {
  return (
    <Navbar style={{backgroundColor: "white", border: "2px solid black", borderRadius: "3px" }} expand="lg" variant="light" >
   
      <Container>
        <Navbar.Brand href="#" >
            <img src={LogoLoreis} alt="logo" style={{ width: "30%", height: "10%", margin: "0", padding: "0"}}/>
            </Navbar.Brand>
        <NavDropdown title="MENU" id="collasible-nav-dropdown" >
                < div style={{ padding: "5%"}}>
              <NavDropdown.Item href="/home" >Home</NavDropdown.Item>
              <NavDropdown.Item href="/sobre-mim">
                Sobre mim
              </NavDropdown.Item>
              <NavDropdown.Item href="/plataformas">Plataformas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contato">
                Contato
              </NavDropdown.Item>
              </div>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;