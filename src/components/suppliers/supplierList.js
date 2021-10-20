import axios from 'axios'
import React,{useState} from 'react'
import { Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import ListLayout from '../../layouts/crudLayout/List'


const cHeader = [
    'Name',
    'Address',
    'Contact Number'
]

const SupplierList = () => {

    const [suppliers,setSuppliers] = useState([])

    const deleteSupplier = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        axios.delete(`http://localhost:5000/api/v1/suppliers/${id}`)
            .then((res) => console.log(res.data))

        window.location.reload()
        console.log(`Supplier deleted with id:${id}`)
    }
    return (
        <ListLayout title="Suppliers" createLink="suppliers" apiLink="suppliers" columnHeaders={cHeader} setDatas={setSuppliers}>
            <tbody>
                {
                    suppliers.map(supplier => (
                        <tr>
                            <td>{supplier.name}</td>
                            <td>{supplier.address}</td>
                            <td>{supplier.contactNumber}</td>
                            <td>
                                <Link to={`/supplier/${supplier._id}`}>
                                    <Eye/>
                                </Link>
                                <Link to={`/supplier/edit/${supplier._id}`}>
                                    <Edit3/>
                                </Link>
                                <a href="#" onClick={()=>deleteSupplier(supplier._id)}>
                                    <Trash2/>
                                </a>
                            </td>
                        </tr>
                    ))    
                }           
            </tbody>
        </ListLayout>       
    )
}

export default SupplierList
