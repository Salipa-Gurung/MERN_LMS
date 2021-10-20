import axios from 'axios'
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'

const ListLayout = ({title,children,createLink,apiLink,columnHeaders,setDatas}) => {

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/${apiLink}`).then((res)=>{
            if(apiLink === 'books'){
                setDatas(res.data.books)
            }else{
                setDatas(res.data.suppliers)
            }
        })
    }, [])

    return (
        <div className="card"> 
            <div className="card-header">{title} List
            <Link to={`/${createLink}/create`} className="float-end btn btn-info">Add {title}</Link>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            {columnHeaders.map(header => (<th>{header}</th>))}
                            <th>Action</th>
                        </tr>
                    </thead>
                    {children}       
                </table>
            </div>
        </div>
    )
}

export default ListLayout
