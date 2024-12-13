
import React from 'react';
import "../Fratelli Fruit Components/NewcssFF.css"
import logo from '../FratelliFruitImages/logo-fratelli.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import { MdEmail } from "react-icons/md";
import Navbar from 'react-bootstrap/Navbar';

const Navbar2 = () => {


 

  
  return (

    
    <div>



      {/* =====================================
                         Header section
              ====================================== */}


      <div className='Header-1'>
        <ul className='list-unstyled d-flex justify-content-around '>
          <div>

            <li> <img src={logo} className='logo2 ' /></li>

          </div>

          <div className='mt-3  main-fratelli d-flex'>
            <li>  <h1 className='fratelli' > Fratelli </h1></li>
            <li><h1 className='fruit'>Fruits</h1></li>


          </div>

          <div className='nav-email-add mt-3'>
          <h6><span className='nav-email'><MdEmail /></span>fratellifruits@gmail.com</h6>

          </div>

        </ul>

      </div>


      {/* =======================================================
                 Header section end 
      ========================================================            */}


      {/* ==================================================
                       NAVBAR SECTION START
           ==================================================== */}

      <Navbar collapseOnSelect expand="lg"   className= "main-navbar " >
        <Container Fluid >

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto   " >
              <Nav.Link href="/HOME" className='btn  ' activeKey="/Home"><em><strong>Home</strong></em></Nav.Link>
              
              <Nav.Link href="/OURTEAM" className='btn'><em><strong>Our Team</strong></em></Nav.Link>
              <Nav.Link href="/AGRONOMY" className='btn'><em><strong>Agronomy</strong></em></Nav.Link>
              <Nav.Link href="/ACTIVITY" className='btn'><em><strong>Activity</strong></em></Nav.Link>
              <Nav.Link href="/PRODUCT" className='btn'><em><strong>Product</strong></em></Nav.Link>
              <Nav.Link href="/VISIONMISSION" className='btn'><em><strong>Vision/Mission</strong></em></Nav.Link>
              <Nav.Link href="/CONTACTUS" className='btn'><em><strong>Contact Us</strong></em></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes">

              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>


   {/* ===================================================
                     NAVBAR SECTION END 
   ===================================================== */}

    </div>


  )
}

export default Navbar2
