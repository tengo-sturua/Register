const express = require('express')
const {getUsers, signUp, signIn, } = require('../controler/auth.constroler')

const router = express.Router();

router.get('/users', getUsers) // Get all user
router.post('/signup', signUp) // Sign up a new user
router.post('/signin', signIn) // sign in an existing user
// router.put('/users', updatePassword) // Update password for  a user


module.exports = router