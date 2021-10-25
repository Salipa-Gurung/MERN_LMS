import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { getSupplier } from '../../api'
import Show from '../../layouts/crudLayout/Show'


const SupplierDetail = () => {
    const {id} = useParams()
    
    const [supplier,setSupplier] = useState({
        _id:"",
        name:"",
        address:"",
        contactNumber:"",
        description:""
    })

    useEffect(() => {
        getSupplier(id).then((res)=>{
        setSupplier(res.data.supplier)}).catch((error)=>console.log(error))
    }, [])

    return (
        <Show title="Supplier">
            <div className="row">
                <div className="col-md-6">
                    <b>Name:</b> {supplier.name}
                </div>
                <div className="col-md-6">
                    <b>Address:</b> {supplier.address}
                </div>
                <div className="col-md-6 mt-4">
                    <b>Contact number:</b> {supplier.contactNumber}
                </div>
                <div className="col-12 mt-4">
                    <b>Description:</b> {supplier.description}
                </div>
            </div>
        </Show>
    )
}

export default SupplierDetail
        