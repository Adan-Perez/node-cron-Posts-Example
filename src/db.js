import mongoose from 'mongoose';

export async function mongoConnect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/node-cron-posts', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}
