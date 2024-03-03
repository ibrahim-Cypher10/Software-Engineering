import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema ({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Vendor = new mongoose.model ('Vendor', vendorSchema);

export default Vendor;

