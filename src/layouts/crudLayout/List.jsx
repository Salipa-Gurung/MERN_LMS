import React from 'react'
import { Link } from 'react-router-dom'

const ListLayout = ({title,children,createLink,columnHeaders,hideCreate=false}) => {

    return (
        <div className="card"> 
            <div className="card-header">{title} List
            {
                hideCreate?null:<Link to={`/${createLink}/create`} className="float-end btn btn-info">Add {title}</Link>
            }
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            {columnHeaders.map((header,i) => (<th key={i}>{header}</th>))}
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
