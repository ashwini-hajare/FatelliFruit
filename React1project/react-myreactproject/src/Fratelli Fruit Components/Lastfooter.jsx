import React from 'react'
import "../Fratelli Fruit Components/NewcssFF.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoArrowForwardOutline } from "react-icons/io5";
import footerlogo from '../FratelliFruitImages/logo-footer-FF.png';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import instafooter from '../FratelliFruitImages/footer-icon-insta.png'
import fackbook from '../FratelliFruitImages/footer-icon-facebook.png'
import linkfooter from '../FratelliFruitImages/footer-icon-linkdin.png'
import twitfooter from '../FratelliFruitImages/footer-icon-twitter.png'
const Lastfooter = () => {
    return (
        <div>

            <Container fluid className='footer-main'>

                <Row className='mt-5 pt-5'>


                    <Col  lg={3}  sm={12} md={6}>

                        <img src={footerlogo} className='footer-logo' />
                        <h6 className='p-3 text-light'>Achiving the new Heights in upcoming years Join our team and grow with us.</h6>

                    </Col>



                    <Col lg={3}  sm={12} md={6}>

                        <div>
                            <h3 className='p-2 text-light'>Get In Touch</h3>

                            <label className='p-1 text-light'>  <strong>Address</strong></label>
                            <h6 className='p-2  text-start '><span className='footer-get-add-icon text-warning'><FaLocationDot /></span>  &nbsp; Old Agra Rd, Pimpalgaon Baswant, Maharashtra 422209</h6>


                            <label className='p-1 text-light'>  <strong>Email Id</strong></label>
                            <h6 className='p-2 text-start'><span className='footer-get-add-icon text-warning'><MdEmail /></span>  &nbsp; fratellifruits@gmail.com</h6>


                            <label className='p-1 text-light'>  <strong> Phone No</strong></label>
                            <h6 className='p-2 text-start'><span className='footer-get-add-icon text-warning'><FaPhoneAlt /></span>  &nbsp; 9923815102</h6>
                        </div>

                    </Col>




                    <Col lg={3}  sm={12} md={6}>

                        <div>
                            <h3 className='p-2 text-light'>Links</h3>

                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span> &nbsp;&nbsp; Home </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span> &nbsp;&nbsp; Agronomy </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span> &nbsp;&nbsp;Activity</h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span>&nbsp;&nbsp; Product </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span>&nbsp;&nbsp; Vision/Mission </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline /></span> &nbsp;&nbsp;Contact Us </h6>

                        </div>
                    </Col>


                    <Col lg={3}  sm={12} md={6}>

                        <div>
                            <h3 className='p-2 text-light'>Social Links</h3>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline />&nbsp;</span> <span className='footer-ll-icon'><img src={instafooter}/> </span> &nbsp;&nbsp;Instagram </h6>

                       
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline />&nbsp;</span> <span> < img src={twitfooter} className='foot-link-din' /></span> &nbsp;&nbsp; Twitter </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline />&nbsp;</span> <span><img src={fackbook}/> </span> &nbsp;&nbsp;Facebook </h6>
                            <h6 className='p-2 text-light'> <span><IoArrowForwardOutline />&nbsp;</span> <span><img src={linkfooter}  className='foot-link-din' /> </span> &nbsp;&nbsp;Linkdin </h6>
                        </div>
                    </Col>








                </Row>
                {/* <div className='footer-bg-cut-image '>
                <p    class="copyright"> &copy; 2024 All Rights Reserved By  <span class="site-name">Sumago </span>   Infotech Pvt. Ltd.  
                </p>

             
                </div> */}
            </Container>


        </div>
    )
}

export default Lastfooter
