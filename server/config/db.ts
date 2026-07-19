import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   mongoose.connection.on("connected", () =>
//     console.log(" MongoDB connected successfully"),
//   );
//   await mongoose.connect(process.env.MONGODB_URI!);
// };

// export default connectDB;
