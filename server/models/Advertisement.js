// const mongoose = require('mongoose');
import mongoose from 'mongoose';
const advertisementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // trim: true
  },
  description: {
    type: String,
    required: true,
    // trim: true
  },
  price: {
    type: String,
    required: true,
    // trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  active: {
    type: Boolean,
    default: true
  }
},
  { timestamps: true });

const Advertisement = mongoose.model('Advertisement', advertisementSchema);

export default Advertisement;