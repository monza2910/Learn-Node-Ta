import express from 'express'
import { RegisterUser,LoginUser } from '../controller/authController.js'

const router = express.Router()

router.post('/register', RegisterUser)

router.post('/login', LoginUser)

router.get('/logout', (req, res) => {
  res.send('Logout Successful')
})

router.get('/getUser', (req, res) => {
  res.send('Profile Successful')
})

export default router