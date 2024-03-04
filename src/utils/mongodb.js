import mongoose from "mongoose";
let isConnected = false;

export const connectToDataBase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};

export default isConnected;
