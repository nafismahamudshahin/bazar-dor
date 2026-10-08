"use client";

import Link from "next/link";
import { FormEvent } from "react";
import { FaGithub, FaLongArrowAltLeft } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const formData = new FormData(e.currentTarget);

        // const email = formData.get("email");
        // const password = formData.get("password");

        // console.log({
        //     email,
        //     password,
        // });
    };

    return (
        <div className="min-h-screen bg-[#f3f8f4] px-4 py-8">

            {/* Header */}
            <div className="mx-auto mb-5 max-w-107.5 text-center">
                <h1 className="text-xl font-bold text-[#17221a]">
                    সাইন ইন
                </h1>

                <p className="mt-1 text-[11px] text-gray-500">
                    বিস্তারিত দাম, বাজারের তুলনা ও আপডেট পেতে অ্যাকাউন্টে ঢুকুন
                </p>
            </div>

            {/* Card */}
            <div className="mx-auto w-full max-w-107.5 rounded-2xl border border-[#dce7df] bg-[#fbfdfb] p-5">

                <form
                    onSubmit={handleSubmit}
                    className="space-y-3"
                >

                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1.5 block text-xs font-medium text-[#202820]"
                        >
                            ইমেইল
                        </label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-1.5 block text-xs font-medium text-[#202820]"
                        >
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            required
                            minLength={8}
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="btn mt-1 h-9 min-h-9 w-full rounded-lg border-0 bg-[#07963d] text-xs font-medium text-white hover:bg-[#078536]"
                    >
                        সাইন ইন
                    </button>

                    {/* Divider */}
                    <div className="divider my-1 text-[10px] text-gray-400">
                        অথবা
                    </div>

                    {/* Social */}
                    <div className="grid grid-cols-2 gap-2">
                        <button type="button" className="btn h-9 min-h-9 rounded-lg border border-[#d8e3da] bg-white text-[10px] font-normal text-gray-700 hover:bg-gray-50">
                            <FcGoogle size={20} />
                            Google দিয়ে চালিয়ে যান
                        </button>
                        <button type="button" className="btn h-9 min-h-9 rounded-lg border border-[#d8e3da] bg-white text-[10px] font-normal text-gray-700 hover:bg-gray-50">
                            <FaGithub size={20} />
                            GitHub দিয়ে চালিয়ে যান
                        </button>
                    </div>

                    {/* Signup */}
                    <p className="pt-1 text-center text-[11px] text-gray-500">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/sign-up"
                            className="font-medium text-[#16a544] hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>

                </form>
            </div>

            {/* Back Home */}
            <div className="mt-5 text-center">
                <Link href="/" className="text-[11px] text-gray-400 hover:text-green-600 flex items-center justify-center gap-1">
                    <FaLongArrowAltLeft size={10} />
                    হোম পেজে ফিরে যান
                </Link>
            </div>
        </div>
    );
};

export default Login;