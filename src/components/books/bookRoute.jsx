import React from 'react'
import { Route } from 'react-router'
import BookList from './bookList'
import CreateBook from './createBook'
import EditBook from './editForm'
import BookDetail from './bookDetail'

const BookRoute = () => {
    return (
        <>
            <Route path="/book" exact>
                <BookList/>
            </Route>
            <Route path="/book/create">
                <CreateBook/>
            </Route>
            <Route path="/book/edit/:id">
                <EditBook/>
            </Route>
            <Route path="/book/:id">
                <BookDetail/>
            </Route>
   
        </>
    )
}

export default BookRoute
