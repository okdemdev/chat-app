import mongoose, { connect } from 'mongoose';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Succesfully connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to mongodb', error.message);
  }
};

export default connectToMongoDB;
