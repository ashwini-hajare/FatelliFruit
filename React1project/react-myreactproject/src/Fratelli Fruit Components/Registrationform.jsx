import React , { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import "../Fratelli Fruit Components/NewcssFF.css";
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Registrationform = () => {

    const [ fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    function handleSubmit(item) {
      item.preventDefault();
      const newdata = {
          fname: fname,
          lname: lname,
        

      }
      axios.post(`http://localhost:8080/register`, newdata)
            .then(res => {
                console.log(res.data);
                alert('data add successful');
            })
            .catch(err => {
                console.log(err);
            })
    }

  return (
    <div>

      <h1> <center>Fratelli Fruits</center></h1>



      <Container className='mt-3 pt-2'>
        <Row>
          <Col><h3>Fratelli Fruits FPC Agricultural Service. Nurturing farms and farmers!
            Agriculture Grapes • Agronomy • trade.</h3>
          </Col>


          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Label>Email address</Form.Label>

               <Form.Control type="email" placeholder="Enter email"
               value={fname}
               onChange={(e) => setFname(e.target.value)}
               required
               />
                      </Form.Group>


              <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Label>Password</Form.Label>

                <Form.Control type="password" placeholder="Password"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
                required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>



    </div>
  )
}

export default Registrationform
