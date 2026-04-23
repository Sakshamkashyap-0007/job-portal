import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 15000,
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        throw error;
    }
}

export default connectDB
