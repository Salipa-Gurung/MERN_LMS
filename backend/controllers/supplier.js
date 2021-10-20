const Supplier = require('../model/supplier')

const getSuppliers = async (req,res)=>{
    const suppliers = await Supplier.find({})
    return res.json({suppliers,count:suppliers.length})
}

const getSupplier = async (req,res)=>{
    const supplier = await Supplier.findById({_id:req.params.id})
    return res.json({supplier})
}

const addSupplier = async (req,res)=>{
    await Supplier.create(req.body)
    return res.json("Added successfully")
}

const updateSupplier = async (req,res)=>{
    await Supplier.findByIdAndUpdate({_id:req.params.id},req.body,{
        new:true,
        runValidators:true
    })
    return res.json("updated successfully")
}

const deleteSupplier = async (req,res)=>{
    await Supplier.findOneAndRemove({_id:req.params.id})
    return res.json("Deleted successfully")
}

module.exports = {
    getSuppliers,
    getSupplier,
    addSupplier,
    updateSupplier,
    deleteSupplier
}