import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import Form from '../../layouts/crudLayout/Form'
import { getBook , editBook } from '../../api'

const EditBook = () => {

    const {id} = useParams()

    const [book,setBook] = useState({
        name:'',
        author:'',
        genres:[],
        availableNumber:0,
        description:''
    })

    useEffect(() => {
        getBook(id).then((res)=>{
        setBook(res.data.book)}).catch((error)=>console.log(error))
    }, [])

    const handleChange = (event)=>{
        const name = event.target.name
        const value = event.target.value

        if(name === "genres"){
            const genreArray = value.split(',')
            setBook({...book,[name]:genreArray})
            return
        }

        setBook({...book,[name]:value})
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        editBook(id,book).then(res => console.log(res.data))
        window.location.href = '/book'
        console.log(book)
    }

    return (
        <Form title="Book" type="Edit" handleSubmit={handleSubmit}>
            <div className="row form-group">
                <div className="col-md-6">
                    <label htmlFor="">Name:</label> 
                    <input type="text" name="name" onChange={handleChange} required className="form-control" value={book.name}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="">Author:</label> 
                    <input type="text" name="author" onChange={handleChange} required className="form-control" value={book.author}/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="">Genre:</label> 
                    <input type="text" name="genres" onChange={handleChange} className="form-control" value={book.genres}/>
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="">Available number:</label> 
                    <input type="number" name="availableNumber" required 
                        className="form-control" value={book.availableNumber} onChange={handleChange}/>
                </div>
                <div className="col-12 mt-4">
                    <label htmlFor="">Description:</label> 
                    <textarea name="description" className="form-control" 
                        required cols="30" rows="10" value={book.description} onChange={handleChange}></textarea>
                </div>
            </div>
        </Form>
    )
}

export default EditBook
