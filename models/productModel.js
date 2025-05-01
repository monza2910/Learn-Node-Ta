import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: [true, 'Nama sudah di Gunakan oleh produk lain'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be greater than 0'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  image: {
    type: String,
    default: null,
    // required: [true, 'Image is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be greater than 0'],
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    enum: ["Honda","Kawasaki",'Suzuki','Yamaha']
},
});

const Product = mongoose.model('Product', productSchema);

export default Product;