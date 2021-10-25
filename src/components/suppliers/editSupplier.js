import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Form from '../../layouts/crudLayout/Form'
import { getSupplier , editSupplier } from '../../api'

const EditSupplier = () => {

    const {id} = useParams()

    const [supplier,setSupplier] = useState({
        name:'',
        address:'',
        contactNumber:0,
        description:''
    })

    useEffect(() => {
        getSupplier(id).then((res)=>{
        setSupplier(res.data.supplier)}).catch((error)=>console.log(error))
    }, [])

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setSupplier({...supplier,[name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        editSupplier(id,supplier).then(res => console.log(res.data))
        window.location.href = '/suppliers'
      
    }

    return (
        <Form title="Supplier" type="Edit" handleSubmit={handleSubmit}>
            <div className="row form-group">
                <div className="col-md-6">
                    <label htmlFor="">Name:</label> 
                    <input type="text" name="name" onChange={handleChange} required className="form-control" value={supplier.name}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Address:</label> 
                    <input type="text" name="address" onChange={handleChange} required className="form-control" value={supplier.address}/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="">Contact number:</label> 
                    <input type="number" name="contactNumber" required 
                        className="form-control" value={supplier.contactNumber} onChange={handleChange}/>
                </div>
                <div className="col-12 mt-4">
                    <label htmlFor="">Description:</label> 
                    <textarea name="description" className="form-control" 
                        required cols="30" rows="10" value={supplier.description} onChange={handleChange}></textarea>
                </div>
            </div>
        </Form>
    )
}

export default EditSupplier
