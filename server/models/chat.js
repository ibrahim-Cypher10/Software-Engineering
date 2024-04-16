import mongoose from 'mongoose';

const ChatMessageSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: { type: String },
  timestamp: { type: Date, default: Date.now }
});

export const ChatMessage = mongoose.model('ChatMessage', ChatMessageSchema);

export default ChatMessage;