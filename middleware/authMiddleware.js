import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

export const authMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt

    if(!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findById(decoded.id).select('-password')
        next()
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' })
    }
})

export const adminMiddleware = asyncHandler(async (req, res, next) => {
    const token = req.cookies.jwt

    if(req.user && req.user.role === 'admin') {
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
})