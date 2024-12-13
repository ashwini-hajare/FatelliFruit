import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
const Visionmission = () => {
  return (
    <div>
      <Container fluid className=' BG-color-our-team '>
        <Row>
          <Breadcrumb className='breadcrum-main' >
            <Container className='d-flex ' >
              <Breadcrumb.Item href="index.html"><span className='bread-home'>Home</span></Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item' >
                Vision & Mission
              </Breadcrumb.Item>

              <h1 className='bread-h1-item '>Vision & Mission</h1>
            </Container>
          </Breadcrumb>


        </Row>


        <div className='mt-5'>
          <ListGroup as="ol" numbered className='text-start '>
            <ListGroup.Item as="li"> <strong>Growing best Quality with Sustainable Practices</strong></ListGroup.Item>
            <ListGroup.Item as="li"><strong>Catering Whole World with Best Quality</strong></ListGroup.Item>
            <ListGroup.Item as="li"><strong>Betterment of Both Farmers And Consumers</strong></ListGroup.Item>
            <ListGroup.Item as="li"><strong>Agro Tourism</strong></ListGroup.Item>
          </ListGroup>
        </div>
      </Container>
    </div>
  )
}

export default Visionmission
