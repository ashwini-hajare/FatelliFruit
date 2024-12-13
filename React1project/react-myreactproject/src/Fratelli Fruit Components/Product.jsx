import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import greengrapes from '../FratelliFruitImages/last-caro-2nd-greeng.jpg';
import pomo2 from '../FratelliFruitImages/last-caro-pomogranats.jpg';

import ginger1 from '../FratelliFruitImages/last-caro-ginger.jpg';
import raisins1 from '../FratelliFruitImages/last-caro-raisins.jpg';
import cardimg2 from '../FratelliFruitImages/Chocolate-Covered-Raisin.jpg';
import greenblack from '../FratelliFruitImages/last-caro-green-black-grapes.jpg';
import Card from 'react-bootstrap/Card';

const Product = () => {
  return (
    <div>
      <Container fluid className=' BG-color-our-team '>
        <Row>
          <Breadcrumb className='breadcrum-main' >
            <Container className='d-flex ' >
              <Breadcrumb.Item href="index.html"><span className='bread-home'>Home</span></Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item' >
                Product
              </Breadcrumb.Item>

              <h1 className='  bread-h1-item'>Product</h1>
            </Container>
          </Breadcrumb>


        </Row>

        <Container>
          <div className="mt-5 d-flex justify-content-around">
            <Button variant="warning" size="lg">
              Export
            </Button>{' '}
            <Button variant="success" size="lg">
              Domestic
            </Button>
          </div>


          <div className='mt-5'>

            <Row>

              <Col sm={12} lg={4} md={6} className='mt-4'>

                <Card style={{ width: '20rem' }} className='cardpos'>

                  <Card.Img variant="top" src={greengrapes} className='imgcard card-1-3' />

                  <Card.Body className='crdbody'>

                    <Card.Title className='crdtitle'> Green Grapes</Card.Title>

                  </Card.Body>
                </Card>



              </Col>

              <Col sm={12} lg={4} md={6} className='mt-4'>
                <Card style={{ width: '20rem' }} className='cardpos' >
                  <Card.Img variant="top" src={pomo2} className='imgcard card-1-3' />
                  <Card.Body>
                    <Card.Title className='crdtitle'>Pomogranates</Card.Title>
                  </Card.Body>
                </Card>

              </Col>



              <Col sm={12} lg={4} md={6} className='mt-4'>

                <Card style={{ width: '20rem' }} className='cardpos' >
                  <Card.Img variant="top" src={raisins1} className='imgcard card-1-3' />
                  <Card.Body >
                    <Card.Title className='crdtitle' >Raisins </Card.Title>
                  </Card.Body>
                </Card>



              </Col>

              <Col sm={12} lg={4} md={6} className='mt-4'>

                <Card style={{ width: '20rem' }} className='cardpos'>

                  <Card.Img variant="top" src={ginger1} className='imgcard card-1-3' />

                  <Card.Body className='crdbody'>

                    <Card.Title className='crdtitle'>Ginger</Card.Title>

                  </Card.Body>
                </Card>



              </Col>
              <Col sm={12} lg={4} md={6} className='mt-4'>

                <Card style={{ width: '20rem' }} className='cardpos' >
                  <Card.Img variant="top" src={cardimg2} className='imgcard' />
                  <Card.Body >
                    <Card.Title className='crdtitle' >Raisins & Chocolates</Card.Title>
                  </Card.Body>
                </Card>



              </Col>

              <Col sm={12} lg={4} md={6} className='mt-4'>
                <Card style={{ width: '20rem' }} className='cardpos' >
                  <Card.Img variant="top" src={greenblack} className='imgcard card-1-3' />
                  <Card.Body>
                    <Card.Title className='crdtitle'> Black Grapes</Card.Title>
                  </Card.Body>
                </Card>

              </Col>

            </Row>
          </div>

        </Container>

      </Container>
    </div>
  )
}

export default Product
