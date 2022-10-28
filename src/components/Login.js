import React from 'react'
import { useState } from 'react'
import {signInUser} from '../features/login/loginSlice'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const emailHandle = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(email,password)
        dispatch(signInUser({  email, password }))
    }
    return (
        <div>
            <div className="register-container">
                <h3>Login</h3>
                <div className='register-form'>

                    
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email' value={email} onChange={emailHandle} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={passwordHandle} />
                    <button className='sub-btn' onClick={handleLogin}>Register</button>

                </div>
            </div>
        </div>
    )
}

export default Login