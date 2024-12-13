import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaRegCheckCircle } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Slider from "react-slick";
import LC2 from '../Swiper images/labour traning 2.jpg';
import LC1 from '../Swiper images/farmar training 1.jpg';
import autoactivity1 from '../FratelliFruitImages/autoactivity1.jpg';
import autoactivity2 from '../FratelliFruitImages/autoactivity2.jpg';
import autoactivity3 from '../FratelliFruitImages/autoactivity3.jpg';
import autoactivity4 from '../FratelliFruitImages/autoactivity4.jpg';
import autoactivity5 from '../FratelliFruitImages/autoactivity5.jpg';
import autoactivity6 from '../FratelliFruitImages/autoactivity6.jpg';
import autoactivity7 from '../FratelliFruitImages/autoactivity7.jpg';
import autoactivity8 from '../FratelliFruitImages/autoactivity8.jpg';
import autoactivity9 from '../FratelliFruitImages/autoactivity9.jpg';
import autoactivity10 from '../FratelliFruitImages/autoactivity10.jpg';
import autoactivity11 from '../FratelliFruitImages/autoactivity11.jpg';
const Activities = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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

      image: autoactivity1,

    },
    {

      image: autoactivity2,

    },
    {

      image: autoactivity3,

    },
    {

      image: autoactivity4,

    },
    {

      image: autoactivity5,

    },
    {

      image: autoactivity6,

    },
    {

      image: autoactivity7,

    },
    {

      image: autoactivity8,

    },
    {

      image: autoactivity9,

    },
    {

      image: autoactivity10,

    },
    {

      image: autoactivity11,

    },

  ]

  return (
    <div>
      <Container fluid className=' BG-color-our-team '>
        <Row>
          <Breadcrumb className='breadcrum-main' >
            <Container className='d-flex ' >
              <Breadcrumb.Item href="index.html"><span className='bread-home-activity'>Home</span></Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item-activity' >

                ACTIVITY
              </Breadcrumb.Item>

              <h1 className='bread-h1-item-activity '>
                ACTIVITY</h1>
            </Container>
          </Breadcrumb>


        </Row>


        <h1 className='text-center mt-4'>Farmer Empowerment </h1>


        <h2 className='text-center mt-4'>Farmer Study Tours</h2>
        <Container>
          <div>
            <Row>
              <Col lg={6} >
                <div className='mt-4 '>
                  <h3 className=' text-start '> <strong> Most important and challenging facts about this project</strong></h3>
                  <p className='mt-4 text-agro text-start '><em> Can small-scale farmers become entrepreneurs? Yes. Small-scale farmers all over the world have shown a remarkable ability to adapt. They look for better ways to organise their farms. They try new crops and cultivars, better animals, and alternative technologies to increase productivity, diversify production, reduce risk – and to increase profits.</em></p>
                  <ul className='list-unstyled mt-4  text-start'>
                    <li> <span className='circle-agro'><FaRegCheckCircle /></span> &nbsp;
                      Take a look at our round up of the best shows</li>
                    <li> <span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      We make Farmers to understand..!</li>
                    <li><span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      Reduce risk and to increase profits</li>
                  </ul>

                </div>
              </Col>


              <Col lg={6} >
                <div>
                  <div className="slider-container mt-3">
                    <Slider {...settings}>
                      {data.map((d, index) => (
                        <div key={index} className='data-item'>
                          <img src={d.image} className='autoactivityslide' />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </Col>

            </Row>


            <div className='para-2-box21'>
              <Row className='mt-5 pt-3' >
                <Col sm={12} md={12} lg={12}>

                  <p d-flex text-center  ><em className='para-2-box2'>Fratelli Fruits has achieved Greater heights in the past years $ many more counting .</em></p>

                </Col>
              </Row>
            </div>
          </div>




          <div>
            <h2 className='mt-4 d-flex justify-content-center align-item-center'>Nursery</h2>

          </div>
          <div>
            <Row>


              <Col lg={6} className='mt-4'>
                <img src={LC2} className='team21' />
              </Col>


              <Col lg={6} >
                <div className='mt-4 '>
                  <h3 className=' text-start '> <strong> Most important and challenging facts about this project</strong></h3>
                  <p className='mt-4 text-agro1 text-start '><em> They have become more marketoriented and have learned to take calculated risks to open or create new markets for their products. Many small-scale farmers have many of the qualities of an entrepreneur</em></p>
                  <ul className='list-unstyled mt-4  text-start'>
                    <li> <span className='circle-agro1'><FaRegCheckCircle /></span> &nbsp;
                      Take a look at our round up of the best shows</li>
                    <li> <span className='circle-agro1'><FaRegCheckCircle /></span>&nbsp;
                      It has survived not only five centuries</li>
                    <li><span className='circle-agro1'><FaRegCheckCircle /></span>&nbsp;
                      We make Farmers to understand..!</li>
                  </ul>

                </div>
              </Col>

            </Row>

          </div>





          <div>
            <Row>




              <Col lg={6} >
                <div className='mt-4 '>
                  <h3 className=' text-start '> <strong> Most important and challenging facts about this project</strong></h3>
                  <p className='mt-4 text-agro1 text-start '><em> They have become more marketoriented and have learned to take calculated risks to open or create new markets for their products. Many small-scale farmers have many of the qualities of an entrepreneur</em></p>
                  <ul className='list-unstyled mt-4  text-start'>
                    <li> <span className='circle-agro1'><FaRegCheckCircle /></span> &nbsp;
                      Take a look at our round up of the best shows</li>
                    <li> <span className='circle-agro1'><FaRegCheckCircle /></span>&nbsp;
                      It has survived not only five centuries</li>
                    <li><span className='circle-agro1'><FaRegCheckCircle /></span>&nbsp;
                      We make Farmers to understand..!</li>
                  </ul>

                </div>
              </Col>



              <Col lg={6} className='mt-4'>
                <img src={LC1} className='team21' />
              </Col>

            </Row>

          </div>



        </Container>

      </Container>
    </div>
  )
}

export default Activities
