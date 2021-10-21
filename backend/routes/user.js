const router = require('express').Router()

const {
    getUsers,
    getUser,
    deleteUser,
    loginUser,
    registerUser
} = require('../controllers/user')

router.route('/').get(getUsers)
router.route('/login').post(loginUser)
router.route('/register').post(registerUser)
router.route('/:id').get(getUser).delete(deleteUser)


module.exports = router