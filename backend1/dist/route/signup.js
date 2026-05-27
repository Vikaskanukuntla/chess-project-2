import bcrypt from "bcrypt";
import { User } from "../models/User.js";
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
        username,
        email,
        password: hashedPassword
    });
    res.json({
        message: "User created"
    });
};
//# sourceMappingURL=signup.js.map