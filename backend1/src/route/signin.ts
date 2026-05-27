import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const signin = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(403).json({ message: "User not found" });
    }

    const matched = await bcrypt.compare(password, user.password as string);

    if (!matched) {
        return res.status(403).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
        { id: user._id },
        "SECRET_KEY"
    );

    res.json({ token });
};