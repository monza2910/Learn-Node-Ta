import express from 'express'
import asyncHandler from '../middleware/asyncHandler.js'
import Product from '../models/productModel.js'

export const getAllProduct = asyncHandler(async (req, res) => {
    const products = await Product.find()
    res.status(200).json({ message: 'Get All Product Successful', data: products })
})

export const createProduct = asyncHandler(async (req, res) => {
    
    const product = await Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        quantity: req.body.quantity,
        brand: req.body.brand
    })
    return res.status(200).json({
        message: 'Create Product Successful',
        data: product
    })
})

export const getProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const product = await Product.findById(paramsId)

    if(!product) {
        return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json({ message: 'Get Product Successful', data: product })
})

export const updateProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const updateProduct = await Product.findByIdAndUpdate(paramsId, req.body, {
        new: true,
        runValidators: false,
    })

    if(!updateProduct) {
        return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json({ message: 'Update Product Successful', data: updateProduct })
})

export const deleteProduct = asyncHandler(async (req, res) => {
    const paramsId = req.params.id
    const deleteProduct = await Product.findByIdAndDelete(paramsId)

    if(!deleteProduct) {
        return res.status(404).json({ message: 'Product not found' })
    }
    return res.status(200).json({ message: 'Delete Product Successful' })
})

export const fileUpload = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'File Upload Successful' })
})


