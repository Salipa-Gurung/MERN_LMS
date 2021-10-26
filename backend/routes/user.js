const router = require('express').Router()

const {
    getUsers,
    getUser,
    deleteUser,
    loginUser,
    registerUser,
    updateUser
} = require('../controllers/user')

router.route('/').get(getUsers)
router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/:id').get(getUser).delete(deleteUser).patch(updateUser)


module.exports = router