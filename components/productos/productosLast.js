import React from "react";
import Image from 'next/image'
import logo from './images/puppy.png'
import StarRating from "../rating"
import cat  from "./images/Ad.png";
import Button from 'react-bootstrap/Button';
import logo4 from './images/Vector (6).png'

function ProductsLast () {
  const categorias = [{title:'1st Choice Puppy Chiot', price:'9,99'},{title:'1st Choice Puppy Chiot', price:'9,99'},{title:'1st Choice Puppy Chiot', price:'9,99'},{title:'1st Choice Puppy Chiot', price:'9,99'},{title:'1st Choice Puppy Chiot', price:'9,99'},{title:'1st Choice Puppy Chiot', price:'9,99'}]

  return <> <h1 className="titulo" style={{marginTop:'100px'}}>Ultimos productos</h1>
    <div className="List">

      <div className="ListOfProd">

          {
                categorias.map((post)=>
                  <div style={{marginRight:'100px'}}>
                    <Image src={logo}
                    />
                    <h3 className="subtitulos2">{post.title}</h3>
                    <StarRating stars="3.5" />
                    <h3 className="subtitulos2">${post.price}</h3>
                    <Button variant="danger" style={{display:'flex', width:'100%'}}><Image alt="carro" style={{ width:'15px', marginTop:'5px'}} src={logo4} />Agregar</Button>

                  </div>
                )
          }
      </div>
      <Image alt='cat' src={cat} className='fotogato' />
    </div>

  </>

}

export default ProductsLast;
