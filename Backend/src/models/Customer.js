import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
//   balance: {
//     type: Number,
//     required: [true, 'balance is required.'],
//     max: [99999999, 'balance cannot be larger than 99999999.']
//   },
});

const Customer = mongoose.model('Customer', customerSchema);

export default Customer;
