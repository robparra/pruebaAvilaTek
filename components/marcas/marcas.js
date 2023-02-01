import React from "react";
import Image from 'next/image'
import logo from './images/marcas.png'

function Marcas () {
  const categorias = [1,2,3,4]

  return <> <h1 className="titulo" style={{marginTop:'100px', width:'50%'}}>Trabajamos con las mejores marcas</h1>
    <div className="List2">
      <h3 style={{padding:'15px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut viverra fames sed.</h3>
      <div className="ListOfMarc">

          {
                categorias.map(()=>
                  <div style={{marginLeft:'100px'}}>
                    <Image src={logo}
                    />

                  </div>
                )
          }
      </div>
    </div>

  </>

}

export default Marcas;
