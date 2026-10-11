"use client";

import SocalLogin from "@/components/socialLogin/SocalLogin";
import { signUp } from "@/lib/auth-client";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
    const [passwordError, setPasswordError] = useState<string>("")
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");
        if (password !== confirmPassword) {
            setPasswordError("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মিলছে না।")
        }
        const { error } = await signUp.email({
            name: name as string,
            email: email as string,
            password: password as string
        })
        if (error) {
            toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।");
        } else {
            toast.success("আপনার অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!");
        }
    };

    return (
        <div className="min-h-screen px-4 py-8">

            {/* Heading */}
            <div className="mx-auto mb-5 max-w-107.5">
                <h1 className="text-center text-xl font-bold text-[#17221a]">
                    অ্যাকাউন্ট তৈরি করুন
                </h1>

                <p className="mt-1 text-center text-xs text-gray-500">
                    বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন
                </p>
            </div>

            {/* Form Card */}
            <div className="mx-auto w-full max-w-107.5 rounded-2xl border border-[#dce7df] bg-[#fbfdfb] p-5">

                <form onSubmit={handleSubmit} className="space-y-3">

                    {/* Name */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[#202820]">
                            নাম
                        </label>

                        <input
                            name="name"
                            type="text"
                            placeholder="যেমন: রহিম উদ্দিন"
                            required
                            minLength={3}
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[#202820]">
                            ইমেইল
                        </label>

                        <input
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <p className="text-red-500">{passwordError}</p>
                        <label className="mb-1.5 block text-xs font-medium text-[#202820]">
                            পাসওয়ার্ড
                        </label>

                        <input
                            name="password"
                            type="password"
                            placeholder="কমপক্ষে ৮ অক্ষর"
                            required
                            minLength={8}
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="mb-1.5 block text-xs font-medium text-[#202820]">
                            পাসওয়ার্ড নিশ্চিত করুন
                        </label>

                        <input
                            name="confirmPassword"
                            type="password"
                            placeholder="আবার লিখুন"
                            required
                            minLength={8}
                            className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs outline-none focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn mt-1 h-9 min-h-9 w-full rounded-lg border-0 bg-[#20b24b] text-xs font-medium text-white hover:bg-[#199b40]">
                        অ্যাকাউন্ট তৈরি করুন
                    </button>

                    {/* Divider */}
                    <div className="divider my-1 text-[10px] text-gray-400">
                        অথবা
                    </div>

                    {/* Social */}
                    <SocalLogin></SocalLogin>

                    {/* Login */}
                    <p className="pt-1 text-center text-[11px] text-gray-500">
                        অ্যাকাউন্ট আছে?{" "}
                        <Link href="/sign-in" className="font-medium text-[#16a544] hover:underline">
                            সাইন ইন করুন
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

export default SignUp;
