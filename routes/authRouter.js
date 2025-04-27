import express from 'express'
import { RegisterUser } from '../controller/authController.js'

const router = express.Router()

router.post('/register', RegisterUser)

router.post('/login', (req, res) => {
  res.send('Login Successful')
})

router.get('/logout', (req, res) => {
  res.send('Logout Successful')
})

router.get('/getUser', (req, res) => {
  res.send('Profile Successful')
})

export default router