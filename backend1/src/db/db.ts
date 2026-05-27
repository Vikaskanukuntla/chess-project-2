import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
           "mongodb://arya456:vinay123@ac-ehddcon-shard-00-00.rg3lmny.mongodb.net:27017,ac-ehddcon-shard-00-01.rg3lmny.mongodb.net:27017,ac-ehddcon-shard-00-02.rg3lmny.mongodb.net:27017/chess?ssl=true&replicaSet=atlas-tzo8i2-shard-0&authSource=admin&appName=Cluster0"
        );

        console.log("MongoDB Atlas connected");
    } catch (err) {
        console.log("DB connection error:", err);
        process.exit(1);
    }
};