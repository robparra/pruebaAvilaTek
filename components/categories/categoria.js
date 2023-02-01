import React from "react";
import Image from 'next/image'
import logo from './images/dog.png'

function Categoria () {
  const categorias = [{title:'Perros'},{title:'Gatos'},{title:'Peces'},{title:'Roedores'},{title:'Reptiles'}]

  return <> <h1 className="titulo">Una gran variedad de categorías</h1>
    <div className="ListOfCat">

        {
              categorias.map((post) =>
                <div className="ListOfCat2">
                  <Image src={logo}
                  />
                  <h3 className="subtitulos">{post.title}</h3>
                </div>
              )
        }
    </div>
  </>

}

export default Categoria;
