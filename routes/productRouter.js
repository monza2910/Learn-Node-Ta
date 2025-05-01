import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { getAllProduct,fileUpload,createProduct,getProduct,updateProduct,deleteProduct } from '../controller/productController.js'
const router = express.Router()

//Get All Product
router.get('/getAll', authMiddleware, getAllProduct)

//Creaqte Product
router.post('/create', authMiddleware, createProduct)

//Get Product
router.get('/detail/:id', authMiddleware, getProduct)

//Update Product
router.put('/update/:id', authMiddleware, updateProduct)

//Delete Product
router.delete('/delete/:id', authMiddleware, deleteProduct)

//File Upload
router.post('/fileUpload', authMiddleware, fileUpload)

export default router