import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Image from 'next/image'
import casa from './images/Dog house.png'
import arbol from './images/Tree.png'
import redes from '/pages/images/RRSS.png'

function Footer() {
  return (
    <MDBFooter style={{background: '#FCFCFC'}} className='text-center text-lg-start text-muted'>
      <section className='' style={{padding:'10px'}}>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Sobre nosotros
              </h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Mi cuenta</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Información personal
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Direcciones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Mascotas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Órdenes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Agenda
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Información</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Formulario de contacto
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Preguntas frecuentes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Términos y condiciones
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Política de privacidad
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Atención al cliente</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Bello Monte, calle XXXX, local 1
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> (0212) 575 54 12
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                soporte@maxipet.com
              </p>

              <p>
                <MDBIcon icon="print" className="me-3" /> Lunes a Viernes
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> 9:00 a.m. - 5:00 p.m.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Image style={{float:'right', position:'relative', bottom:'20px', float:'right'}} alt='arbol' src={arbol}/>
      <Image style={{marginLeft:'5px'}} alt='casa' src={casa}/>

      <div className='text-center p-4' style={{ background: '#E2081E', height:'36px', color:'#FEFEFE'}}>
        <h6 >Copyright © 2021 Maxi Pet. Todos los Derechos Reservados. Desarrollado por Avila Tek</h6>
      </div>
    </MDBFooter>
  );
}

export default Footer;
