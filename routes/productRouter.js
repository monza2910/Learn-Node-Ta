import express from 'express'
import { authMiddleware, adminMiddleware } from '../middleware/authMiddleware.js'
import { getAllProduct,fileUpload,createProduct,getProduct,updateProduct,deleteProduct } from '../controller/productController.js'
const router = express.Router()

//Get All Product
router.get('/getAll',authMiddleware, adminMiddleware, getAllProduct)

//Creaqte Product
router.post('/create', authMiddleware, adminMiddleware, createProduct)

//Get Product
router.get('/detail/:id', authMiddleware, adminMiddleware, getProduct)

//Update Product
router.put('/update/:id', authMiddleware, adminMiddleware, updateProduct)

//Delete Product
router.delete('/delete/:id',authMiddleware, adminMiddleware, deleteProduct)

//File Upload
router.post('/fileUpload',authMiddleware, adminMiddleware, fileUpload)

export default router