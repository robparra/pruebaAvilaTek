import React from 'react';
import Image from "next/image";
import HomeNavbar  from "../components/navbar/navbar";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import vector  from "./images/Branch.png";
import vector1  from "./images/RRSS.png";
import banner1  from "./images/banner1.png";
import banner2  from "./images/banner2.png";
import banner3  from "./images/banner3.png";
import Carrusel from '../components/carrusel/caroeusel'
import Categoria from '../components/categories/categoria'
import Products from "../components/productos/productos";
import ProductsPop from "../components/productos/productosPop";
import ProductsLast from "../components/productos/productosLast";
import Servicios from "../components/services/services";
import Marcas from "../components/marcas/marcas";
import Footer from "../components/footer/footer";


function HomePage() {
  return (
    <>
      <Navbar className='color-nav'>
        <Container>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Image alt='logo' src={vector} style={{margin:"5px"}}/>
                  <Image alt='logo2' src={vector1} style={{margin:"5px"}}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <HomeNavbar />
      <Carrusel />
      <Categoria />
      <Products />
      <div className='banner1' style={{padding:'50px'}}>
        <Image alt='banner' style={{width:'50%'}} src={banner1} />
        <Image alt='banner' style={{width:'50%'}} src={banner2} />
      </div>
      <ProductsPop />
      <Image alt='banner' style={{width:'100%',padding:'50px'}} src={banner3} />
      <ProductsLast />
      <Servicios />
      <Marcas />
      <Footer />
    </>
  );
}

export default HomePage;
