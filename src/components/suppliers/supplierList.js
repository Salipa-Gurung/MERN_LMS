import React,{useState , useEffect} from 'react'
import { Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { fetchSuppliers , deleteSupplier} from '../../api'
import ListLayout from '../../layouts/crudLayout/List'


const cHeader = [
    'Name',
    'Address',
    'Contact Number'
]

const SupplierList = () => {

    const [suppliers,setSuppliers] = useState([])

    const getSuppliers = async ()=>{fetchSuppliers().then(res=>setSuppliers(res.data.suppliers))}

    useEffect(() => {
        getSuppliers()
    }, [])

    const handleDelete = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        {deleteSupplier(id).then((res) => console.log(res.data))
            window.location.reload()
        }
    }
    return (
        <ListLayout title="Suppliers" createLink="suppliers" columnHeaders={cHeader}>
            <tbody>
                {
                    suppliers.map(supplier => (
                        <tr key={supplier.contactNumber}>
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
                                <a href="#" onClick={()=>handleDelete(supplier._id)}>
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
