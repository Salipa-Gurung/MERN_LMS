import axios from 'axios'
import React,{useState} from 'react'
import { Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import ListLayout from '../../layouts/crudLayout/List'

const cHeader = [
    'Name',
    'Author',
    'Genres',
    'Availability'
]

const BookList = () => {

    const [books,setBooks] = useState([])

    const deleteBook = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
        axios.delete(`http://localhost:5000/api/v1/books/${id}`)
            .then((res) => console.log(res.data))

        window.location.reload()
        console.log(`Book deleted with id:${id}`)
    }
    return (
        <ListLayout title="Book" createLink="book" apiLink="books" columnHeaders={cHeader} setDatas={setBooks}>
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
        </ListLayout>
    )
}

export default BookList
