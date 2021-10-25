import React from 'react'
import { useHistory } from 'react-router'

const Show = ({title,children}) => {

    const history = useHistory()

    return (
        <div className="card">
            <div className="card-header">
                {title} Details
            </div>
            <div className="card-body">
                {children}
            </div>
            <div className="card-footer">
                <button className="btn btn-dark" onClick={history.goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default Show
