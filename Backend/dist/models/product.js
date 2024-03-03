import mongoose from 'mongoose';
// Product Schema for the model. This is the list of all options user will have to fill in during signing up.
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
