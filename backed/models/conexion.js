import mongoose from "mongoose";
import env from "dotenv";
env.config(); 

const MONGODB = process.env.MONGO_URI;

try {
  mongoose.set("strictQuery", false);
  const conn = await mongoose.connect(MONGODB);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
  console.error({ error });
}

mongoose.connection.on("connected", () => {
  console.log("Database is connected to", connection.db.databaseName);
});
