const Book = require('../model/book')

const getAllBooks = async (req,res)=>{
    const books = await Book.find({})
    return res.json({books,count:books.length})
}

const getBook = async (req,res)=>{
    const book = await Book.findById({_id:req.params.id})
    return res.json({book})
}

const addBook = async (req,res)=>{
    await Book.create(req.body)
    return res.json("Added successfully")
}

const updateBook = async (req,res)=>{
    await Book.findByIdAndUpdate({_id:req.params.id},req.body,{
        new:true,
        runValidators:true
    })
    return res.json("updated successfully")
}

const deleteBook = async (req,res)=>{
    await Book.findOneAndRemove({_id:req.params.id})
    return res.json("Deleted successfully")
}

module.exports = {
    getAllBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
}