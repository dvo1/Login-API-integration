import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {signUpUser} from '../features/login/loginSlice'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch =useDispatch()

    const nameHandle = (e) => {
            setName(e.target.value)
    }
    const emailHandle = (e) => {
            setEmail(e.target.value)
    }
    const passwordHandle = (e) => {
            setPassword(e.target.value)
    }

    const registerHandle = (e) => {
        e.preventDefault()
        // console.log(name,email,password)
        dispatch(signUpUser({name, email, password}))
    }

    return (
        <div>
            <div className="register-container">
                <h3>Register</h3>
                <div className='register-form'>

                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Name' value={name} onChange={nameHandle} />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Email' value={email} onChange={emailHandle} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={passwordHandle}/>
                    <button className='sub-btn' onClick={registerHandle}>Register</button>

                </div>
            </div>

        </div>
    )
}

export default Register