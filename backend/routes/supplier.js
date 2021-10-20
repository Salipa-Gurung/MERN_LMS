const router = require('express').Router()

const {
    getSuppliers,
    getSupplier,
    addSupplier,
    updateSupplier,
    deleteSupplier
} = require('../controllers/supplier')

router.route('/').get(getSuppliers).post(addSupplier)
router.route('/:id').get(getSupplier).delete(deleteSupplier).patch(updateSupplier)


module.exports = router