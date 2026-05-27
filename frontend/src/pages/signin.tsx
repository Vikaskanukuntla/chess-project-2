import { useState } from "react";
import axios from "axios";

import {
    Link,
    useNavigate
} from "react-router-dom";

export function Signin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignin() {

        const response = await axios.post(
            "http://localhost:3000/auth/signin",
            {
                email,
                password
            }
        );

        localStorage.setItem(
            "token",
            response.data.token
        );

        navigate("/game");
    }

    return (

        <div className="h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex justify-center items-center">

            <div className="w-96 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl">

                <h1 className="text-4xl font-bold text-white text-center mb-8">
                    Signin
                </h1>

                <div className="space-y-5">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-white"
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-white"
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button
                        onClick={handleSignin}
                        className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-zinc-300 transition"
                    >
                        Signin
                    </button>

                    <p className="text-zinc-400 text-center">

                        Don't have an account?{" "}

                        <Link
                            to="/signup"
                            className="text-white hover:underline"
                        >
                            Signup
                        </Link>

                    </p>

                </div>

            </div>

        </div>
    );
}