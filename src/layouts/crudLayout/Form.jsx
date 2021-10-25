import React from 'react'
import { useHistory } from 'react-router'

const Form = ({title,type,children,handleSubmit}) => {
    
    const history = useHistory()

    return (
        <div className="card">
            <div className="card-header">
                {type} {title}
            </div>
            <div className="card-body">
                <form id="form" onSubmit={handleSubmit}>
                    {children}
                </form>
            </div>
            <div className="card-footer">
                <button type="submit" form="form" className="btn btn-outline-primary">{type === "Create"?"Submit":"Edit"}</button>
                <button className="btn btn-dark float-end" onClick={history.goBack}>Go Back</button>
            </div>            
        </div>
    )
}

export default Form
