import axios from "axios";

const API = axios.create({
    baseURL:'http://localhost:5000/api/v1'
})

export const fetchBooks = ()=> API.get('/books')
export const createBook = (book) => API.post('/books',book)
export const editBook = (id,book) => API.patch(`/books/${id}`,book)
export const deleteBook = (id)=> API.delete(`/books/${id}`)
export const getBook = (id) => API.get(`/books/${id}`)

export const fetchSuppliers = () => API.get('/suppliers')
export const createSupplier = (supplier) => API.post('/suppliers',supplier)
export const editSupplier = (id,supplier) => API.patch(`/suppliers/${id}`,supplier)
export const deleteSupplier = (id)=> API.delete(`/suppliers/${id}`)
export const getSupplier = (id) => API.get(`/suppliers/${id}`)

export const fetchUsers = () => API.get('/users')
export const editUser = (id,user) => API.patch(`/users/${id}`,user)
export const deleteUser = (id)=> API.delete(`/users/${id}`)
export const getUser = (id) => API.get(`/users/${id}`)