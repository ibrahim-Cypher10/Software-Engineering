import mongoose from 'mongoose';

const managerSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
//   salary: {
//     type: Number,
//     required: [true, 'balance is required.'],
//     max: [99999999, 'balance cannot be larger than 99999999.']
//   },
});

const Manager = new mongoose.model('Manager', managerSchema);

export default Manager;