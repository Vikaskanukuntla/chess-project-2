import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Signup() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignup() {

        await axios.post(
            "http://localhost:3000/auth/signup",
            {
                username,
                email,
                password
            }
        );

        navigate("/signin");
    }

    return (

    <div className="h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex justify-center items-center">

        <div className="w-96 bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-2xl">

            <h1 className="text-4xl font-bold text-white text-center mb-8">
                Signup
            </h1>

            <div className="space-y-5">

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 rounded-lg bg-zinc-800 text-white outline-none border border-zinc-700 focus:border-white"
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                />

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
                    onClick={handleSignup}
                    className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-zinc-300 transition"
                >
                    Signup
                </button>

            </div>

        </div>

    </div>
);
}