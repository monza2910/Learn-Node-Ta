import User from '../models/userModel.js'
import jwt from 'jsonwebtoken'
import asyncHandler from '../middleware/asyncHandler.js'

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

const createSendResToken = (user,statusCode, res) => {
    const token = signToken(user._id)

    const isDev = process.env.NODE_ENV === 'development' ? false : true

    const cookieOptions = {
        expires: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: isDev,
    }
    res.cookie('jwt', token, cookieOptions)

    user.password = undefined
    res.status(statusCode).json({ 
        message: 'Login successful', 
        data : user
    })
}

export const RegisterUser = asyncHandler(async (req, res) => {
    const isOwner = (await User.countDocuments()) === 0

    const role = isOwner ? 'admin' : 'user'

    const createUser = await User.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role
    })

    createSendResToken(createUser,201,res)
    
})
