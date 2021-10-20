import React, { useState,useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'

const BookDetail = () => {
    const {id} = useParams()
    
    const [book,setBook] = useState({
        _id:"",
        name:"",
        author:"",
        genres:[],
        availability:true,
        availableNumber:"",
        description:""
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/books/${id}`).then((res)=>{
        setBook(res.data.book)}).catch((error)=>console.log(error))
    }, [])

    const history = useHistory()
    console.log(book)
    return (
        <div className="card">
            <div className="card-header">Book Details</div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <b>Name:</b> {book.name}
                    </div>
                    <div className="col-md-6">
                        <b>Author:</b> {book.author}
                    </div>
                    <div className="col-md-6 mt-4">
                        <b>Genre:</b> {book.genres.map((genre,i)=>(
                                <span className="badge bg-success rounded-pill">{genre}</span>
                            ))}
                    </div>
                    <div className="col-md-6 mt-4">
                        <b>Availability:</b> {book.availability?"Available":"Not available"}
                    </div>
                    <div className="col-md-6 mt-4">
                        <b>Available number:</b> {book.availableNumber}
                    </div>
                    <div className="col-12 mt-4">
                        <b>Description:</b> {book.description}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button className="btn btn-dark" onClick={history.goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default BookDetail
        