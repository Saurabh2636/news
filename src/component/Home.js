import React, { useState } from 'react'
import {Card,Button} from 'react-bootstrap'
import { useAuth } from './context/AuthContaxt'
import {Link,useHistory} from 'react-router-dom'
const Home = () => {
    const {currentUser,logout} = useAuth()
    const [error, setError] = useState('')
    const history = useHistory()
    async function handleLogout(){
        setError('') 
        try{
            await logout()
            history.push('/login')
        }catch{
            setError("Failed to log out")
        }

    }
    return (
        <>
         <Button variant="primary" onClick={handleLogout}>Log Out</Button>
             
        </>
    )
}

export default Home
