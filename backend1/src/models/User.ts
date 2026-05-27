import mongoose from "mongoose";

interface IUser {
    username: string;
    email: string;
    password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
    username: String,
    email: String,
    password: String
});

export const User = mongoose.model<IUser>(
    "User",
    UserSchema
);