import mongoose from 'mongoose';

const prodSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, 'name is required.'],
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, 'price of product is required.'],
  },
  vendor: {
    type: String,
    required: [true, 'name is required.'],
  },
});

const Product = new mongoose.model ('Product', prodSchema);

export default Product;