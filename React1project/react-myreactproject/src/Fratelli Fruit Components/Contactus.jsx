import React, { useState } from 'react';
import axios from 'axios';
import "../Fratelli Fruit Components/NewcssFF.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    let imageFile = event.target.files[0];
    setFile(imageFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contact", contact);
    formData.append("subject", subject);
    formData.append("message", message);



    if (file) formData.append("image", file); 

    axios.post('http://localhost:8000/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data', 
      },
    })
    .then(response => {
      console.log(response.data);
      alert('Data added successfully');
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
  };

  return (
    <>
      <Container fluid className='BG-color-our-team'>
        <Row>
          <Breadcrumb className='breadcrum-main'>
            <Container className='d-flex'>
              <Breadcrumb.Item href="index.html">
                <span className='bread-home'>Home</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className='bread-item'>
                Contact Us
              </Breadcrumb.Item>
              <h1 className='bread-h1-item'>Contact Us</h1>
            </Container>
          </Breadcrumb>
        </Row>

        <Container className='mt-5'>
          <Row>
            <Col sm={12} md={6} lg={8}>
              <Form onSubmit={handleSubmit}>
                <h3 className='text-center get-contact-1 mt-5'>Get In Touch</h3>

                <Row>
                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        className='contact-input-field mt-3'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formEmail">
                      <Form.Control
                        type="email"
                        placeholder="Your Email"
                        className='contact-input-field mt-3'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formContact">
                      <Form.Control
                        type="tel"
                        placeholder="Contact"
                        className='contact-input-field mt-3'
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formSubject">
                      <Form.Control
                        type="text"
                        placeholder="Subject"
                        className='contact-input-field mt-3'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={12} md={6}>
                    <Form.Group className="mb-3" controlId="formFile">
                      <Form.Control
                        type="file"
                        className='contact-input-field mt-3'
                        onChange={handleFileChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control
                    as="textarea"
                    placeholder="Message"
                    rows={3}
                    className="textarea-large"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>

                <div className='text-center'>
                  <center>
                    <Button variant="outline-warning" type="submit" className='contact-us-button1'>
                      Send Response
                    </Button>
                  </center>
                </div>
              </Form>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <div className='Contact-page-1 mt-5'>
                <h4><em>WhatsApp No.: <span>9923815102</span></em></h4>
              </div>

              <div className='Contact-page-1 mt-5'>
                <h4><em>Email: <span>fratellifruits@gmail.com</span></em></h4>
              </div>

              <div className='Contact-page-1 mt-5'>
                <h4><em>Agronomy No.: <span>8208453484</span></em></h4>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.071150708714!2d73.99045667428156!3d20.172762816629664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdddadb1b81ff11%3A0x48e4719d7970579!2sFratelli%20Fruits!5e0!3m2!1sen!2sin!4v1731488937805!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: '0' }}
       
       
      ></iframe>
    </>
  );
};

export default Contactus;
