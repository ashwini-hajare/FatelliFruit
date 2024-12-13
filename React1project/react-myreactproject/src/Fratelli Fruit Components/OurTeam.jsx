import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css"
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const OurTeam = () => {
  return (
    <div>
      <Container fluid className=' BG-color-our-team '>
        <Row>
          <Breadcrumb className='breadcrum-main' >
            <Container className='d-flex ' >
              <Breadcrumb.Item href="/HOME"><span className='bread-home'>Home</span></Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item' >
                Agronomy
              </Breadcrumb.Item>

              <h1 className='bread-h1-item '>Our Team</h1>
            </Container>
          </Breadcrumb>


        </Row>

        <div className='mt-3 gy-5 '>
          <h1 className='text-center'>Board Of Directors</h1>
          <h3 className='text-start'>Primary Directors</h3>

          <Row lg={{ cols: 4, gutter: 3 }} xs={{ cols: 2, gutter: 2 }}>
            <Col lg={3} sm={6} >


              <div className="p-3 m-3 border bg-light  name-effect">
                <div>
                  <h4  className='brod-style-radius'> Anant B More, Chairman</h4>
                </div>
              </div>
               </Col>

               
            <Col lg={3} sm={6}>

              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Harish B More, Managing Director</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
            
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>Yadav S Kawale, Director </h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>

              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>  Meet Patel, Director </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4> Praful R Shinde, Director </h4>
                </div>
              </div>
            </Col>
          </Row>


        </div>

        <div className='mt-2 gy-5 '>

          <h3 className='text-start'>Secondary Directors</h3>

          <Row lg={{ cols: 4, gutter: 3 }} xs={{ cols: 2, gutter: 2 }}>
            <Col lg={3} sm={6} >

              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Yogesh P Dawange</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Dattatray R Baste</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Shrikant K Bhusal </h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4> Bhushan M Pagar </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>  Vishnu P Pagar </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4>Sandip P Kawale </h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4> Pandharinath B Takate
                  </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>  Vikram S Takate </h4>
                </div>
              </div>
            </Col>
          </Row>


        </div>

        <div className='mt-5 gy-5 '>

          <h1  className='text-center'>Executive Team</h1>

          <Row lg={{ cols: 4, gutter: 3 }} xs={{ cols: 2, gutter: 2 }}>
            <Col lg={3} sm={6} >

              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Rodrigo Oliva-Mancilla, Executive Strategic Advisor</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Anant B More, CTO</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>Harish B More, COO </h4>
                </div>
              </div>
            </Col>
          </Row>


        </div>

        <div className='mt-3 gy-5 '>

          <h1  className='text-center'>Agronomists</h1>

          <Row lg={{ cols: 4, gutter: 3 }} xs={{ cols: 2, gutter: 2 }}>
            <Col lg={3} sm={6} >

              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Vishwajit A More, Chief Agronomist</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4> Abhiraj B More, Senior Agronomist</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>Sagar B Kardel, Senior Agronomist </h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light  name-effect">
                <div>
                  <h4> Amol T Borade, Senior Agronomist</h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Swapnil S Udar, Senior Agronomist </h4>
                </div>
              </div>
            </Col>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4> Abasaheb R Patil, Senior Agronomist</h4>
                </div>
              </div>
            </Col>
          </Row>


          <Row>

            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Ashutosh B Jadhav, Junior Agronomist </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>Amit T Hadawale, Junior Agronomist </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Sudesh R Manjare, Junior Agronomist </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>
                  <h4>Pratik P Dumbare, Junior Agronomist </h4>
                </div>
              </div>
            </Col>


            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4>Rushikesh Y Pawar, Junior Agronomist </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Shubham B Bhandare, Junior Agronomist </h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Rohit Galande, Junior Agronomist </h4>
                </div>
              </div>
            </Col>

          </Row>

        </div>

        <div className='mt-3 gy-5  name-effect'>

          <h1  className='text-center'>Management</h1>

          <Row lg={{ cols: 4, gutter: 3 }} xs={{ cols: 2, gutter: 2 }}>
            <Col lg={3} sm={6} >

              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4>Nikhil S More, HR and Admin</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4>  Swapnil Gare, Procurement</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect ">
                <div>
                  <h4> Amol S More, Logistics and Operations </h4>
                </div>
              </div>
            </Col>


            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4>  Nikhil R Ghadoje, Farm Agronomist</h4>
                </div>
              </div>
            </Col>
            <Col lg={3} sm={6}>
              <div className="p-3 m-3 border bg-light name-effect">
                <div>

                  <h4>  Vishal D Patil, Farm Agronomist</h4>
                </div>
              </div>
            </Col>
          </Row>

        </div>
      </Container>
    </div>
  )
}

export default OurTeam
