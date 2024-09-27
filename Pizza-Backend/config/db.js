// import { connect } from 'mongoose';
// import { config } from 'dotenv';

// config();

// const connectDB = async () => {
//   if (!process.env.MONGO_URI) {
//     throw new Error('MONGO_URI environment variable is not set');
//   }
//   try {
//     const conn = await connect(process.env.MONGO_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error('MongoDB connection error:', err.stack);
//     process.exit(1);
//   }
// };

// export default connectDB;



// import { connect } from 'mongoose';
// import { config } from 'dotenv';

// config();

// const connectDB = async () => {
//   if (!process.env.MONGO_URI) {
//     throw new Error('MONGO_URI environment variable is not set');
//   }
  
//   try {
//     const conn = await connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error('MongoDB connection error:', err.stack);
//     process.exit(1);
//   }
// };

// export default connectDB;



import { connect } from 'mongoose';
import { config } from 'dotenv';

config(); 

const connectDB = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI environment variable is not set');
  }
  
  try {
    const conn = await connect(process.env.MONGO_URI);  
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error('MongoDB connection error:', err.message);  
    process.exit(1);  
  }
};

export default connectDB;
