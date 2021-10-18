import React,{useRef, useState} from 'react'
import {Form,Button,Card ,Alert,Container} from 'react-bootstrap'
import {useAuth} from './context/AuthContaxt'
import {Link,useHistory} from 'react-router-dom'
const Signup = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const PasswordRef = useRef()
    const CPasswordRef = useRef()
    const {signup } = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()
    async function handleSubmit(e){
        console.log(PasswordRef.current.value,CPasswordRef.current.value)
        e.preventDefault()
        if(PasswordRef.current.value!==CPasswordRef.current.value){
              return setError('Passwords do not match.')
        }
        try{
            setError('')
            await signup(emailRef.current.value , PasswordRef.current.value)
            history.push('/news/login')
        }
        catch{
            setError('Failed to create an account!!!')
        }
    }
    return (
        <>
        <Container style={{maxWidth:'80vh', marginTop:'25vh'}}>
          <Card >
              <Card.Body>
                  <h2 className="text-center mb-4">Sign Up</h2>
                   
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                  <Form.Group id='name'>
                         <Form.Label>Name</Form.Label>
                         <Form.Control type = "text" ref={nameRef} required></Form.Control> 
                     </Form.Group>
                     <Form.Group id='email'>
                         <Form.Label>Email</Form.Label>
                         <Form.Control type = "email" ref={emailRef} required></Form.Control> 
                     </Form.Group>
                     <Form.Group id='password'>
                         <Form.Label>Password</Form.Label>
                         <Form.Control type = "password" ref={PasswordRef} required></Form.Control> 
                     </Form.Group>
                     <Form.Group id='cpassword'>
                         <Form.Label>Confirm Password</Form.Label>
                         <Form.Control type = "password" ref={CPasswordRef} required></Form.Control> 
                     </Form.Group>
                     <Button className = 'w-100' type='submit'>
                         Sign up
                     </Button>
                  </Form>
              </Card.Body>
          </Card>
          <div className= 'w-100 text-center mt-2'>
              Already have an account ?<Link to='/news/login'> Log in </Link>
          </div>
          </Container>
        </>
    )
}

export default Signup
