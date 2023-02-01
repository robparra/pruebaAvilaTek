import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image";
import fondo from './images/Rectangle 4.png'

function Carrusel() {
  return (
    <Carousel >
      <Carousel.Item >
        <Image
          className="d-block w-100"
          src={fondo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={fondo}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={fondo}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;
