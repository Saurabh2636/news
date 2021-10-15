import React from 'react'
import Login from './component/Login'
import Signup from './component/Signup'
import Home from './component/Home'
import { AuthProvider } from './component/context/AuthContaxt'
import {Container} from 'react-bootstrap'
import PrivateRoute from './component/PrivateRoute'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
const App = () => {
  return (   
    <Container
    className='d-flex align-items-center justify-content-center'
    style={{minHeight:'100vh'}}
    >
    <div className='w-100' style={{maxWidth:'500px'}}>
      <Router>
      <AuthProvider>
        <Switch>
           <Route exact path='/signup' component={Signup} />
           <PrivateRoute exact path='/' component={Home} />
           <Route exact path='/login' component={Login} />
        </Switch>
      </AuthProvider>
      </Router>
      
    </div>
    </Container>
   
  )
}

export default App
