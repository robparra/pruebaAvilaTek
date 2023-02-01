import React from "react";
import Image from 'next/image'
import logo from '../categories/images/dog.png'

function Servicios () {
  const categorias = [{title:'Peluqueria'},{title:'Odontologia'},{title:'Veterinario'},{title:'Entrenamiento'},{title:'Psicologia canina'},{title:'Fiestas de cumpleaños'}]

  return <> <h1 className="titulo">Nuestros servicios</h1>
    <div className="ListOfServ">

        {
              categorias.map((post) =>
                <div className="fotoservicio" >
                  <Image src={logo}
                  />
                  <h3 className="subtitulosserv" >{post.title}</h3>
                  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus molestie rhoncus id nunc, porta leo tempus facilisi.</h6>
                </div>
              )
        }
    </div>
  </>

}

export default Servicios;
