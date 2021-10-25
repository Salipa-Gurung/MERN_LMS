import axios from 'axios'
import React, { useState } from 'react'
import Form from '../../layouts/crudLayout/Form'

const AddSupplier = () => {

    const [supplier,setSupplier] = useState({
        name:"",
        address:"",
        contactNumber:"",
        description:""
    })

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        setSupplier({...supplier,[name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        axios.post('http://localhost:5000/api/v1/suppliers', supplier)
            .then(res => console.log(res.data))
        console.log(supplier)
        setSupplier({
            name:"",
            address:"",
            contactNumber:"",
            description:""
        })
    }

    return (
        <Form title="Supplier" type="Create" handleSubmit={handleSubmit}>
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

export default AddSupplier
