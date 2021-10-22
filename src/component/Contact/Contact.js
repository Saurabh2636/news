import React from 'react'
import Header from '../Header'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
const Contact = () => {
    return (
        <div>
             <Header />
            <h1 style={{textAlign: 'center',color: 'white',fontSize:'3rem' }}>Contact us</h1>
            <Container style={{maxWidth:'100vh'}}>
                <Card>
                <Card.Body>                
                  <Form >
                  <Form.Group id='name'>
                         <Form.Label>Name</Form.Label>
                         <Form.Control type = "text" required></Form.Control> 
                     </Form.Group>
                     <Form.Group id='email'>
                         <Form.Label>Email</Form.Label>
                         <Form.Control type = "email" required></Form.Control> 
                     </Form.Group>
                     <Form.Group>
                         <Form.Label>Phone Number</Form.Label>
                         <Form.Control type = "number" required></Form.Control> 
                     </Form.Group>
                     <Form.Group>
                         <Form.Label>Message</Form.Label>
                         <Form.Control  as="textarea" rows={5} required></Form.Control> 
                     </Form.Group>
                     <Button className = 'w-100 mt-4' type='submit'>
                         Send Message
                     </Button>
                  </Form>
              </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Contact
