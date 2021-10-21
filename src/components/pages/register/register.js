import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'react-feather'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    
    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:5000/api/v1/users/register', user)
            .then(res=>{
                localStorage.setItem("JWT_TOKEN",res.data.token)
                window.location.href='/'
            })
        
    }
    const [user, setUser] = useState({
        username:"",
        email:"",
        password:"",
        confirmPassword:""
    })

const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setUser({...user,[name]:value})
}

    return (
        <div>
            <form className="card p-4 w-25" onSubmit={handleSubmit}>
            <Link to='/'><ArrowLeft style={{color:"#000"}}/></Link><br/>
                <h3>REGISTER</h3>
                <div className="form-group mt-4">
                    <label >Username:</label>
                    <input type="text" name="username" value={user.username} onChange={handleChange} className="form-control" placeholder="Username" required></input>
                </div>
                <div className="form-group mt-4">
                    <label >Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Email" required></input>
                </div>
                <div className="form-group mt-4">
                    <label >Password:</label>
                    <input type="text" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Password" required></input>
                </div>
                <div className="form-group mt-4">
                    <label >Confirm Password:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} className="form-control" placeholder="Password" required></input>
                </div>
                <button type="submit" className="btn btn-primary mt-4 mb-2">Register</button>
                <p>Already have an account?<Link to='/login'>Login</Link></p>
            </form>
        </div>
    )
}

export default Register
