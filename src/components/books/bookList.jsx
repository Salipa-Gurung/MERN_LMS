import React,{useState, useEffect} from 'react'
import { Edit3, Eye, Trash2 } from 'react-feather'
import { Link } from 'react-router-dom'
import { fetchBooks } from '../../api'
import ListLayout from '../../layouts/crudLayout/List'
import { deleteBook } from '../../api'

const cHeader = [
    'Name',
    'Author',
    'Genres',
    'Availability'
]

const BookList = () => {

    const [books,setBooks] = useState([])

    useEffect(() => {
        fetchBooks().then(res=>setBooks(res.data.books))
    }, [])    

    const handleDelete = (id)=>{
        if(window.confirm("Are you sure you want to delete?"))
            {deleteBook(id).then((res) => console.log(res.data))
                window.location.reload()
            }
    }
    return (
        <ListLayout title="Book" createLink="book" columnHeaders={cHeader}>
             <tbody>
                {
                    books.map(book => (
                        <tr key={book.name}>
                            <td>{book.name}</td>
                            <td>{book.author}</td>
                            <td>{
                                    book.genres.map((genre,i)=>(
                                        <span key={i} className="badge bg-success rounded-pill">{genre}</span>
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
                                <a href="#" onClick={()=>handleDelete(book._id)}>
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
