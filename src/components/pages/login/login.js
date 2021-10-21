import React from 'react'
import { ArrowLeft } from 'react-feather'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div>
            <form className="card p-4 w-25">
                <Link to='/'><ArrowLeft style={{color:"#000"}}/></Link><br/>
                <h3>Login</h3>
                <div className="form-group mt-4">
                    <label >Email:</label>
                    <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div className="form-group mt-4">
                    <label >Password:</label>
                    <input type="text" className="form-control" placeholder="Password"></input>
                </div>
                <button type="submit" className="btn btn-primary mt-4 mb-2">Login</button>
                <p>Don't have an account?<Link to='/register'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login
