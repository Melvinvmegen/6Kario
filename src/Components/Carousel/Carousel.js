import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from "./CarouselImage/CarouselImage";

const Carousell = (props) => {
  return (
    <Carousel className="gallery-content" interval="1000000" nextIcon={props.next} prevIcon={props.prev} >
      {props.img.map( el => {
        return <Carousel.Item className="myslides fade-slide first-slide" data-aos="fade-up">
          <CarouselImage img={el.img} alt={el.alt} />
        </Carousel.Item>
      })}
    </Carousel>
  )
}

export default Carousell;
