import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { Edit, Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'

const BookList = () => {

    const [books,setBooks] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/books').then((res)=>{setBooks(res.data.books)})
    }, [])

    const deleteBook = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        axios.delete(`http://localhost:5000/api/v1/books/${id}`)
            .then((res) => console.log(res.data))

        window.location.reload()
        console.log(`Book deleted with id:${id}`)
    }
    return (
        <div className="card"> 
            <div className="card-header">Book List
            <Link to="/book/create" className="float-end btn btn-info">Add book</Link>
            </div>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author Name</th>
                            <th>Genre</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map(book => (
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{
                                            book.genres.map((genre,i)=>(
                                                <span className="badge bg-success rounded-pill">{genre}</span>
                                            ))
                                        }
                                    </td>
                                    <td>{book.availability?"Available":"Not available"}</td>
                                    <td>
                                        <Link to={`/book/${book._id}`}>
                                            <Eye/>
                                        </Link>
                                        <Link to={`/book/edit/${book._id}`}>
                                            <Edit3/>
                                        </Link>
                                        <a href="#" onClick={()=>deleteBook(book._id)}>
                                            <Trash2/>
                                        </a>
                                    </td>
                                </tr>
                            ))    
                        }           
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BookList
