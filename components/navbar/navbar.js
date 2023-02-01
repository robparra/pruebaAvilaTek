import Container from 'react-bootstrap/Container';
import Image from "next/image";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import logo from './images/logo.png'
import logo1  from  './images/Options.png'

function HomeNavbar() {
  return (
  <>
    <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
      <Container>
        <Image src={logo} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex" >
                  <Form.Control
                    style={{marginLeft:'300px', width:'400px', borderRadius:'4px', border:'1px solid #C8C2BE'}}
                    type="search"
                    placeholder="Buscador"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
          </Nav>
          <Nav>
            <Nav.Link href="#">
              <Image alt='location' src={logo1} className='logos-nav' />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Navbar collapseOnSelect expand="lg"  className='nav2' bg="light" variant="light">
        <Container>
          <Nav className="navbar-collapse justify-content-center" >
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Compras por marca</Nav.Link>
            <Nav.Link href="#">Compras por mascota</Nav.Link>
            <Nav.Link href="#">Nuestros servicios</Nav.Link>
            <Nav.Link href="#">Promociones</Nav.Link>
            <Nav.Link href="#">Nosotros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  </>

  );
}

export default HomeNavbar;
