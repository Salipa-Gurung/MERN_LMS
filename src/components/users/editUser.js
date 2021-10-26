import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Form from '../../layouts/crudLayout/Form'
import { getUser , editUser } from '../../api'

const EditUser = () => {

    const {id} = useParams()

    const [user,setUser] = useState({
        username:'',
        password:''
    })

    useEffect(() => {
        getUser(id).then((res)=>{
        setUser({...user,username:res.data.user.username})}).catch((error)=>console.log(error))
    }, [])

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setUser({...user,[name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        editUser(id,user).then(res => console.log(res.data))
        window.location.href = '/users'
      
    }

    return (
        <Form title="User" type="Edit" handleSubmit={handleSubmit}>
            <div className="row form-group">
                <div className="col-md-6">
                    <label htmlFor="">User Name:</label> 
                    <input type="text" name="username" onChange={handleChange} required className="form-control" value={user.username}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Password:</label> 
                    <input type="password" name="password" onChange={handleChange} className="form-control" value={user.password} placeholder="leave blank to unchange password"/>
                </div>
            </div>
        </Form>
    )
}

export default EditUser
