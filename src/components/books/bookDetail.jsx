import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import Show from '../../layouts/crudLayout/Show'
import { getBook } from '../../api'

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
        getBook(id).then((res)=>{
        setBook(res.data.book)}).catch((error)=>console.log(error))
    }, [])

    return (
        <Show title="Book" >
            <div className="row">
                <div className="col-md-6">
                    <b>Name:</b> {book.name}
                </div>
                <div className="col-md-6">
                    <b>Author:</b> {book.author}
                </div>
                <div className="col-md-6 mt-4">
                    <b>Genre:</b> {book.genres.map((genre,i)=>(
                            <span key={i} className="badge bg-success rounded-pill">{genre}</span>
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
        </Show>
    )
}

export default BookDetail
        