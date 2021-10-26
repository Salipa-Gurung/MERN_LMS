import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { getUser } from '../../api'
import Show from '../../layouts/crudLayout/Show'


const UserDetails = () => {
    const {id} = useParams()
    
    const [user,setUser] = useState({
        _id:"",
        userName:"",
        email:""
    })

    useEffect(() => {
        getUser(id).then((res)=>{
        setUser(res.data.user)}).catch((error)=>console.log(error))
    }, [])

    return (
        <Show title="User">
            <div className="row">
                <div className="col-md-6">
                    <b>Name:</b> {user.username}
                </div>
                <div className="col-md-6">
                    <b>Email:</b> {user.email}
                </div>
            </div>
        </Show>
    )
}

export default UserDetails
        