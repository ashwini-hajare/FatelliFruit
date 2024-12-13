import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgagro from '../FratelliFruitImages/agro-chart.jpg';
import { FaRegCheckCircle } from "react-icons/fa";
import team21 from '../FratelliFruitImages/agro-1-team-pic.jpg';
import team212 from '../FratelliFruitImages/agro-2-team-pic.jpg';
import team213 from '../FratelliFruitImages/agro-3-team-pic.jpg';
import team214 from '../FratelliFruitImages/agro-4-team-pic.jpg';
import team215 from '../FratelliFruitImages/agro-5-team-pic.jpg';

import vm1 from '../FratelliFruitImages/vm 1.jpg';
import rp1 from '../FratelliFruitImages/Rushikesh Pawar.jpeg';
import am11 from '../FratelliFruitImages/abhijit more.jpg';

const Agronomy = () => {
  return (
    <div>

      <Container fluid className=' BG-color-our-team '>
        <Row>
          <Breadcrumb className='breadcrum-main' >
            <Container className='d-flex ' >
              <Breadcrumb.Item href="index.html"><span className='bread-home'>Home</span></Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item' >
                Agronomy
              </Breadcrumb.Item>

              <h1 className='bread-h1-item '>Agronomy</h1>
            </Container>
          </Breadcrumb>


        </Row>

        <h1 className='mt-5'>Factors Affecting Grape Farming</h1>
        <Container className='mt-4'>
          <img src={imgagro} className='chart-agro' />


          <div>
            <h2 className='mt-5 pt-5'>We Start With Land Preparation</h2>

          </div>
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

              <Col lg={6} className='mt-4'>
                <img src={team21} className='team21' />
              </Col>

            </Row>

          </div>






          <div>
            <h2 className='mt-5'>Nursery</h2>

          </div>
          <div>
            <Row>


              <Col lg={6} className='mt-4'>
                <img src={team212} className='team21' />
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
            <h2 className='mt-5 '>Irrigation Management  </h2>

          </div>
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

              <Col lg={6} className='mt-4'>
                <img src={team21} className='team21' />
              </Col>

            </Row>

          </div>


          <div className='para-2-box21'>
            <Row className='mt-5 pt-3' >
              <Col sm={12} md={12} lg={12}>

                <p d-flex text-start  ><em className='para-2-box2'>Fratelli Fruits has achieved Greater heights in the past years $ many more counting .</em></p>

              </Col>
            </Row>
          </div>






          <div>
            <Row >


              <Col lg={6} className='mt-5'>
                <img src={team213} className='team21' />
              </Col>


              <Col lg={6} >
                <div className='mt-5 '>
                  <h3 className=' text-start'> <strong>More Benefits</strong></h3>

                  <ul className='list-unstyled mt-4  text-start '>
                    <li> <span className='circle-agro  '><FaRegCheckCircle /></span> &nbsp;
                      Easy in the Agriculture field</li>
                    <li> <span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      Reduced Hard work.</li>
                    <li><span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      Farmers are getting educated</li>
                    <li><span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      If you are going to use a passage</li>
                    <li><span className='circle-agro'><FaRegCheckCircle /></span>&nbsp;
                      Many are willing to join the team</li>
                  </ul>

                </div>
              </Col>

            </Row>
          </div>


          <div className='para-2-box21'>
            <Row className='mt-5 pt-3' >
              <Col xs={12} lg={12}>

                <p d-flex text-start  ><em className='para-2-box2'>   Can small-scale farmers become entrepreneurs? Yes. Small-scale farmers all over the world have shown a remarkable ability to adapt. They look for better ways to organise their farms. They try new crops and cultivars, better animals, and alternative technologies to increase productivity, diversify production, reduce risk – and to increase profits.

                </em></p>

              </Col>
            </Row>
          </div>




          <div>
            <h2 className='mt-5'>Fertigation Management</h2>

          </div>
          <div>
            <Row>


              <Col lg={6} className='mt-4'>
                <img src={team214} className='team21' />
              </Col>


              <Col lg={6} >
                <div className='mt-4 '>
                  <h3 className=' text-start '> <strong> Most important and challenging facts about this project</strong></h3>
                  <p className='mt-4 text-agro1 text-start '><em>  They have become more marketoriented and have learned to take calculated risks to open or create new markets for their products. Many small-scale farmers have many of the qualities of an Entrepreneur.</em></p>
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
                  <h3 className=' text-start '> <strong> Crop Protection</strong></h3>
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

              <Col lg={6} className='mt-4'>
                <img src={team215} className='team21' />
              </Col>

            </Row>

          </div>



          <Row className='mt-3 pt-2'>
          <Col sm={12} md={6} lg={4}>

            <div className="cardlast">

              <div className="card-last-agro card">

                <div className="img-container">
                  <img src={vm1} alt="" />
                </div>

                <div className="card-details">
                  <h2>Vishwajit More</h2>
                  <h5>Agronomist</h5>
                </div>

              </div>
            </div>
          </Col>


          <Col sm={12} md={6} lg={4}>
            <div className="cardlast">
              <div className="card-last-agro card">
                <div className="img-container">
                  <img src={rp1} alt="" />
                </div>
                <div className="card-details">
                  <h2>Rushikesh Pawar </h2>
                  <h5>Agronomist</h5>
                </div>
              </div>
            </div>

          </Col>

          <Col sm={12} md={6} lg={4}>
            <div className="cardlast">
              <div className="card-last-agro card">
                <div className="img-container">
                  <img src={am11} alt="" />
                </div>
                <div className="card-details">
                  <h2>Abhiraj More </h2>
                  <h5>Agronomist</h5>
                </div>
              </div>
            </div>

          </Col>




   
        </Row>




        </Container>









    



      </Container>
    </div>
  )
}

export default Agronomy
