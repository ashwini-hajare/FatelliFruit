import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import 'bootstrap/dist/css/bootstrap.min.css';


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LC1 from '../Swiper images/farmar training 1.jpg';
import LC12 from '../Swiper images/hopping ff 12.jpg';
import LC2 from '../Swiper images/labour traning 2.jpg';
import LC22 from '../Swiper images/post harvest 21.jpg';
import LC3 from '../Swiper images/farm 3.jpg';
import LC32 from '../Swiper images/post h 3 2.jpeg';
import LC4 from '../Swiper images/4.jpeg';


import { Carousel } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import slide11 from '../FratelliFruitImages/agro slide.png';
import slide12 from '../FratelliFruitImages/agro graps slide.png';
import slide13 from '../FratelliFruitImages/IMEXPIC-removebg-preview (1).png';
// import Navbar2 from './Navbar2';
import Card from 'react-bootstrap/Card';
import cardimg1 from '../FratelliFruitImages/grapes.png'
import cardimg2 from '../FratelliFruitImages/Chocolate-Covered-Raisin.jpg';
import cardimg3 from '../FratelliFruitImages/pomo.jpg';

import plant from '../FratelliFruitImages/icon planting.png';
import plant1 from '../FratelliFruitImages/icon agriculture.png';
import plant2 from '../FratelliFruitImages/icon customer.png';
import plant3 from '../FratelliFruitImages/icon gardener.png';

import anant from '../FratelliFruitImages/anant more.jpg';
import harish from '../FratelliFruitImages/harish more.jpg';

import greengrapes from '../FratelliFruitImages/last-caro-2nd-greeng.jpg';
import pomo2 from '../FratelliFruitImages/last-caro-pomogranats.jpg';
import greenblack from '../FratelliFruitImages/last-caro-green-black-grapes.jpg';
import ginger1 from '../FratelliFruitImages/last-caro-ginger.jpg';
import raisins1 from '../FratelliFruitImages/last-caro-raisins.jpg';

import global from '../FratelliFruitImages/patners-global.jpg';
import eikon from '../FratelliFruitImages/patners-eikon.jpg';


import CountUp from 'react-countup';

// import Preloaderoffratellifruit from './Fratelli Fruit Components/Preloaderoffratellifruit';
// import loaderff from '../FratelliFruitImages/loader.png';

const Home2 = () => {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    const set = {
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
        <div>


     


            {/* <Navbar2 /> */}
            {/* =====================================================================
                     CAROUSAL SLIDER SECTION START
    ======================================================================                  */}
            <Container fluid className=' caro-main'>
                <Carousel className='carousel-bg Sheight '>

                    <Carousel.Item className='carousal-1-img'>
                        <div className="d-flex justify-content-evenly ">
                            <img
                                className="d-block w-30 Sheight "
                                src={slide11}
                                alt="First slide"
                            />
                            <div className=" align-self-center carousel-text">
                                <h2 className='caro-text'><em> <b>Agronomy</b></em></h2>

                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='carousal-2-img'>
                        <div className="d-flex  justify-content-evenly">
                            <img
                                className="d-block w-50 Sheight"
                                src={slide12}
                                alt="Second slide"
                            />
                            <div className="align-self-center ">
                                <h2 className='caro-text'><em> <b>Grapes & chocolates</b></em></h2>

                            </div>
                        </div>
                    </Carousel.Item>

                    <Carousel.Item className='carousal-3-img'>
                        <div className="d-flex  justify-content-evenly">
                            <img
                                className="d-block w-50  Sheight"
                                src={slide13}
                                alt="Third slide"
                            />
                            <div className="align-self-center">
                                <h2 className='caro-text' ><em> <b>Import & Export</b></em></h2>

                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

                {/* =====================================================================
                     CAROUSAL SLIDER SECTION end
    ======================================================================     */}





                {/* ==========================================================================
                                CARD SECTION START
     ==========================================================================   */}


                <div className='mt-5 ml-2 d-flex  justify-content-evenly'>

                    <Row>
                        <Col sm={12} md={6} lg={4}>

                            <Card style={{ width: '20rem' }} className='cardpos'>

                                <Card.Img variant="top" src={cardimg1} className='imgcard' />

                                <Card.Body className='crdbody'>

                                    <Card.Title className='crdtitle text-center'>Grapes</Card.Title>

                                </Card.Body>
                            </Card>



                        </Col>
                        <Col sm={12} md={6} lg={4}>

                            <Card style={{ width: '20rem' }} className='cardpos' >
                                <Card.Img variant="top" src={cardimg2} className='imgcard' />
                                <Card.Body >
                                    <Card.Title className='crdtitle text-center' >Raisins & Chocolates</Card.Title>
                                </Card.Body>
                            </Card>



                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <Card style={{ width: '20rem' }} className='cardpos' >
                                <Card.Img variant="top" src={cardimg3} className='imgcard card-1-3' />
                                <Card.Body>
                                    <Card.Title className='crdtitle text-center'>Pomogranates</Card.Title>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>

                </div>
                {/* ==========================================================================
                                CARD SECTION end
     ==========================================================================  */}



                {/* ==================================================================================
                      ICON section start
==================================================================================                       */}

                <div>


                    <Row className='mt-5 pt-5'>
                        <Col sm={12} lg={3} md={6}>

                            <center> <img src={plant} className='plant text-center' /></center>

                            <h3 className='mt-4 text-center count-upp'>+<CountUp start={0} duration={10} delay={1} end={500} /></h3>
                            <h3 className='text-center count-upp1'>Register Farmer</h3>
                        </Col>

                        <Col sm={12} lg={3} md={6}>
                            <center>  <img src={plant1} className='plant text-center' /></center>

                            <h3 className='mt-4 text-center count-upp'>+<CountUp start={0} duration={10} delay={1} end={2000} /></h3>

                            <h3 className='text-center count-upp1'>Acres + Growing</h3>
                        </Col>
                        <Col sm={12} lg={3} md={6}>
                            <center><img src={plant2} className='plant text-center' /></center>

                            <h3 className='mt-4 text-center count-upp'>+<CountUp start={0} duration={10} delay={1} end={100} /></h3>

                            <h3 className='text-center count-upp1'>Villages Covered</h3>
                        </Col>
                        <Col sm={12} lg={3} md={6}>

                            <center>    <img src={plant3} className='plant text-center' /></center>

                            <h3 className='mt-4 text-center count-upp'>+<CountUp start={0} duration={10} delay={1} end={10} /></h3>

                            <h3 className='text-center count-upp1'>Total Products</h3>
                        </Col>
                    </Row>
                </div>
                {/* ==================================================================================
                      ICON section end
==================================================================================   */}




                {/* ==================================================================================
                      paragraph section start
==================================================================================   */}


                <div className='mt-5 pt-5'>
                    <h1 className='TEXTBACK'>Our Journey</h1>
                    <p className='text-start12'>Traditional agriculture in the present scenario is product oriented and the method of doing it is also traditional. All these farming methods should have a scientific approach, there was always research. In this <span className='text1234'> Mr. Arun KaKa More</span> always took initiative and got guidance. Accordingly, in 2014, 17 farmers under the leadership of  <span className='text1234'> Mr. Anant More</span> with the support of  <span className='text1234'> Mr. Netaji Dada Pawar  (MD, Vanita Agro Chemical)</span> went on a study tour of grape farming in South Africa. The study tour brought out the strengths of traditional agriculture in India. It seemed necessary to adopt all these scientific methods in our country. During this visit Mr. Rodrigo Oliva met.    <span className='text1234'> Mr. Rodrigo Oliva </span> has been guiding viticulture in South Africa for fifteen years following scientific practices. From the discussion with him, it was felt that his guidance is very much needed in the farming system of our country. With the special efforts of Mr. Arun Kaka More, Mr. Rodrigo Oliva started mentoring in Indian grape cultivation. After working with Mr. Rodrigo Oliva for almost three years, it was realized that we have to change a lot in our farming methods. In all these journeys, the farmers were not pioneers in accepting the changes. Then a few seven-eight people in the grape industry focused on this project and started changing themselves and the orchard (on the field). People did not understand the guidance given by Mr. Rodrigo Oliva. Considering the scientific approach in this work, Fratelli Fruits Farmer Producer Company was established in the year 2018 under the guidance of Mr. Arun Kaka More under the chairmanship of Mr. Anant More in order to reach the common people for sustainable agriculture. Annu dada, considering the seriousness of this work, and with his great effort in Fratelli Fruits, We started doing agriculture in a scientific way.</p>
                </div>

                {/* ==================================================================================
                      paragraph section end
==================================================================================   */}


                {/* ===============================================================================
             our experties section start
===============================================================================                 */}
                <Container>

                    <div className='d-flex  justify-content-evenly'>


                        <Row className='mt-5 pt-5'>
                            <Col sm={12} lg={4} md={6}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={anant} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>Anant More</h1> <br />
                                            <h2>Chairman</h2>

                                        </div>
                                    </div>
                                </div>

                            </Col>




                            <Col sm={12} lg={4} md={6}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src={harish} alt="Avatar" style={{ width: '300px', height: '300px' }} />
                                        </div>
                                        <div className="flip-card-back">
                                            <h1>Harish More</h1> <br />
                                            <h2>Managing Director</h2>

                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col sm={12} lg={4} md={6} className=' text-start para'>
                                <p > Exporting may help a company achieve experience curve effects and location economies in their home country. Ownership advantages include the firm assets, international experience, and the ability to develop either low-cost or differentiated products. Ownership advantages include the firm assets, international experience.</p>
                            </Col>

                        </Row>
                    </div>

                </Container>

                {/* ===============================================================================
             our experties section end
===============================================================================         */}


                {/* ===============================================================================
            paragraph last section start
===============================================================================         */}

                <Container>
                    <div className='para1-box1'>
                        <Row className='mt-5 pt-3' >
                            <Col sm={12} md={12} lg={12}>
                                <h1 className='TEXTBACK'>Agronomy</h1>
                                <p d-flex text-start ><em>Fratelli started with training farmers to grow world class fruits. We started our journey with research & we developed a precise flow of work to obtain the best quality & thus Fratelli farm training program begun. Today we are team of 9 agronomist who travel farm to farm training farmers to grow quality fruits.</em></p>

                            </Col>
                        </Row>
                    </div>



                    <div className='para1-box1'>
                        <Row className='mt-3 pt-3' >
                            <Col sm={12} md={12} lg={12}>
                                <h4 className='TEXTBACK'>PRECISE AGRICULTURAL PRACTICES & TRAINING</h4>
                                <p d-flex text-start ><em> We are India’s first farmer producer company to practice precise agriculture and training our farmers for the same. By precision, we make no compromise in quality output. we are engaged in high tech farming also we are sensitive about sustainability which we portray in our irrigation management which is helping many in terms of saving water & gaining output.</em></p>

                            </Col>
                        </Row>
                    </div>


                    <div className='para1-box1'>
                        <Row className='mt-3 pt-3' >
                            <Col sm={12} md={12} lg={12}>
                                <h4 className='TEXTBACK'>CATERING THE WORLD WITH BEST QUALITY PRODUCTS</h4>
                                <p d-flex text-start ><em> We started with a thought of catering the world with best quality products to fulfil the requirement of world, that took us to produce the best quality. We at Fratelli make sure we produce & serve only the best.</em></p>

                            </Col>
                        </Row>
                    </div>
                </Container>



                {/* ===============================================================================
             paragraph last section end
===============================================================================         */}

            </Container>



            {/* ===============================================================================
             caraousal slider last section start
===============================================================================         */}
<Container>
            <div className='back-caro-color'>
                <div className='mt-5'>
                    <h1 className='text-light d-flex justify-content-center'><strong>What We’re Offering</strong></h1>

                    <Slider {...set}>
                        {data.map((d, index) => (
                            <div key={index} className='data-item p-2'>
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

            </Container>
            {/* ===============================================================================
             caraousal slider last section end
===============================================================================         */}









            {/* ===============================================================================
                         patners section start
===============================================================================         */}





            <Container fluid className='mt-5 pt-5 caro-main'>

                <h1 className='our-patners '>Our Partner</h1>


                <div className='mt-5  d-flex  justify-content-evenly'>

                    <Row>

                        <Col sm={12} lg={6} md={6} className='mt-3'>
                            <img src={global} />
                        </Col>



                        <Col sm={12} lg={6} md={6} className='mt-3'>
                            <img src={eikon} />
                        </Col>

                    </Row>
                </div>





                {/* ===============================================================================
                         patners section end
===============================================================================         */}





                {/* ===============================================================================
                     Home page last responive carosoal section start
===============================================================================         */}

                <Container>
                    <h1 className='d-flex justify-content-center mt-5'>Latest Activity</h1>
                    <div className="slider-container mt-5 ">
                        <Slider {...settings} >
                            <div >
                                <img src={LC1} className='Last-carousal-farmtrain ' />
                                <h5 className=' font-caro-last '>Farmer Training</h5>
                            </div>


                            <div>
                                <img src={LC12} className='Last-carousal-farmtrain' />
                                <h5 className=' font-caro-last '>Hopping Fruitful Harvest Season of 2024</h5>
                            </div>



                            <div>
                                <img src={LC2} className='Last-carousal-farmtrain' />
                                <h5 className=' font-caro-last '>Labour Traning</h5>
                            </div>


                            <div>
                                <img src={LC22} className='Last-carousal-farmtrain' />
                                <h5 className='  font-caro-last'>Post Harvest Management </h5>
                            </div>



                            <div>
                                <img src={LC3} className='w1' />
                                <h5 className=' font-caro-last '>Enthusiasts striving for sustainable approch. Change is the only Constant. Fratelli Farm Training Technical Session </h5>
                            </div>


                            <div>
                                <img src={LC32} className='w1' />
                                <h5 className=' font-caro-last '>Post Renovation management is key to get well trained plants </h5>
                            </div>

                            <div>
                                <img src={LC4} className='Last-carousal-farmtrain' />
                                <h5 className=' font-caro-last'>Good beginning is half done. India's most well planned Farm. Welcome Allison.</h5>
                            </div>



                        </Slider>
                    </div>
                </Container>
            </Container>


            {/* ===============================================================================
                             Home page last responive carosoal section end
===============================================================================         */}







        </div>
    )
}

export default Home2
