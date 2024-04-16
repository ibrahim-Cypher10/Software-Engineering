import mongoose from 'mongoose';

// Product Schema for the model.
const prodSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  category: {
    type: String,
    required: [true, 'category required',],
  },
  price: {
    type: Number,
    required: [true, 'price of product is required.'],
  },
  images: {
    type: Array,
  },
  vendor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'vendorid is required.'],
  },
  description: {
    type: String,
    required: [true, 'product description is required.'],
  },
});

const Product = new mongoose.model ('Product', prodSchema);

export default Product;

