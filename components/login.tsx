"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            email === "Stephanieabrams36@gmail.com" &&
            password === "Stephanie123@"
        ) {
            console.log("success");
            router.push("/welcome");
        } else {
            setError(true);
        }
    };

    return (
        <section className="bg-white py-8 font-inter">
            <div className="max-w-103 mx-auto px-9">
                <figure className="flex items-center justify-center">
                    <Image
                        src="/images/logo.svg"
                        alt="logo"
                        height={89}
                        width={159}
                    />
                </figure>
                <header className="mt-4 text-center">
                    <h1 className="font-bold font-inter text-2xl text-black">
                        Welcome Back
                    </h1>
                    <p className="mt-1 text-black text-[13px] font-normal">
                        Sign in to access your account
                    </p>
                </header>
                <form onSubmit={handleSubmit} className="pt-6" action="">
                    <input
                        className="invalid:border-red-400  px-3.5 py-5 bg-[#3C3C431A] rounded-[10px] focus:outline-none w-full"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="User ID / Email"
                    />

                    <div className="relative mt-5">
                        <input
                            className="px-3.5 py-5 pr-12 bg-[#3C3C431A] focus:outline-none rounded-[10px] w-full"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3C3C43]/60 hover:text-[#3C3C43]"
                        >
                            {showPassword ? (
                                <Eye size={18} />
                            ) : (
                                <EyeOff size={18} />
                            )}
                        </button>
                    </div>

                    {error && (
                        <p className="text-red-600 text-sm mt-4 text-center">
                            Invalid credentials
                        </p>
                    )}
                    <div className="flex items-center justify-between pt-3">
                        <div className="flex items-center gap-1">
                            <input
                                className="bg-[#3C3C431A]"
                                type="checkbox"
                                name=""
                                id=""
                            />
                            <p className="text-[#0E0E0E] leading-0 text-[11px] font-normal">
                                Remember Me
                            </p>
                        </div>
                        <p className="text-[#0E0E0E] text-[11px] font-normal">
                            Forget Password?
                        </p>
                    </div>
                    <button className="bg-[#004488] py-5 px-3.5 text-white w-full mt-8 rounded-[10px]">
                        Sign In
                    </button>
                    <div className="pt-4">
                        <p className="text-black text-[15px] text-center">
                            or sign in with
                        </p>
                        <div className="pt-5 flex items-center justify-center gap-6.5">
                            <figure className="bg-[#EBEBEC] px-4 py-3.5 rounded-[5px]">
                                <Image
                                    src="/images/google.svg"
                                    alt="google logo"
                                    height={35}
                                    width={35}
                                />
                            </figure>
                            <figure className="bg-[#EBEBEC] px-4 py-3.5 rounded-[5px]">
                                <Image
                                    src="/images/apple.svg"
                                    alt="apple logo"
                                    height={35}
                                    width={35}
                                />
                            </figure>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
