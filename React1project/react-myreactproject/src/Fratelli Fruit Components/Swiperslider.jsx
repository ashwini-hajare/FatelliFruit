import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from 'react-bootstrap'; // Import Card component
import "../Fratelli Fruit Components/Swiperslider.css";
import greengrapes from '../FratelliFruitImages/last-caro-2nd-greeng.jpg';
import pomo2 from '../FratelliFruitImages/last-caro-pomogranats.jpg';
import greenblack from '../FratelliFruitImages/last-caro-green-black-grapes.jpg';
import ginger1 from '../FratelliFruitImages/last-caro-ginger.jpg';
import raisins1 from '../FratelliFruitImages/last-caro-raisins.jpg';
import cardimg1 from '../FratelliFruitImages/grapes.png'
import cardimg2 from '../FratelliFruitImages/Chocolate-Covered-Raisin.jpg';
import cardimg3 from '../FratelliFruitImages/pomo.jpg';

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },

      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
      name: 'Green Grapes',
      image: greengrapes,
     
    },
    {
      name: 'Pomogranates',
      image: pomo2,
    
    },
    {
      name: 'Black Grapes',
      image: greenblack,
     
    },
    {
      name: 'Ginger',
      image: ginger1,
     
    },
    {
      name: 'Green Grapes',
      image: raisins1,
      
    },
    {
      name: 'Grapes',
      image: cardimg1,
      
    },
    {
      name: 'Raisins & Chocolates',
      image: cardimg2,
      
    },
    {
      name: 'Pomogranates',
      image: cardimg3,
      
    },


  ];

  return (
    <div className='back-caro-color'>
      <div className='mt-5'>
      <h1 className='text-light d-flex justify-content-center'><strong>What We’re Offering</strong></h1>

        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='data-item'>
              <Card style={{ width: '20rem' }} className='cardpos'>
                <Card.Img variant="top" src={d.image} className='imgcard card-1-3' />
                <Card.Body className='crdbody'>
                  <Card.Title className='crdtitle'>{d.name}</Card.Title>
                  <Card.Text className='crdtext'>{d.review}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Main;
