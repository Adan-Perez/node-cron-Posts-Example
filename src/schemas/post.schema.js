import mongoose from 'mongoose';

export const postSchema = new mongoose.Schema({
  userId: Number,
  title: String,
  body: String,
  created: { type: Date, default: Date.now },
});

export const Post = mongoose.model('Post', postSchema);
