const express = require('express')
const usercontroller = require('../Controllers/usercontroller')
const router = express.Router()

router.get('/listuserroles', usercontroller.listUserRoles)
router.post('/createuser', usercontroller.createUser)
router.post('/login', usercontroller.login)

module.exports= router
