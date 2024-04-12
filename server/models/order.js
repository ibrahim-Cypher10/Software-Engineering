import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema ({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  bill: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
});

const Order = new mongoose.model ('Order', orderSchema);

export default Order;
