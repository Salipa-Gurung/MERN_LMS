import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

const CreateBook = () => {

    const history = useHistory()

    const [book,setBook] = useState({
        name:"",
        author:"",
        genres:[],
        availableNumber:"",
        description:""
    })

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
        axios.post('http://localhost:5000/api/v1/books', book)
            .then(res => console.log(res.data))
        console.log(book)
        setBook({
            name:"",
            author:"",
            genres:[],
            availableNumber:"",
            description:""
        })
    }

    return (
        <div className="card">
            <div className="card-header">Create Book</div>
            <div className="card-body">
                <form id="create-form" onSubmit={handleSubmit}>
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
                </form>
            </div>
            <div className="card-footer">
                <button type="submit" form="create-form" className="btn btn-outline-primary">Submit</button>
                <button className="btn btn-dark float-end" onClick={history.goBack}>Go Back</button>
            </div>
        </div>
    )
}

export default CreateBook
