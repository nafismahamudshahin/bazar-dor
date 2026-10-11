"use client";

import { useSession } from "@/lib/auth-client";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import UserName from "../profile/UserName";
import UserEmail from "../profile/UserEmail";

const SingInAndSingUpBtn = () => {
    const { data: session, isPending } = useSession()
    if (isPending) {
        return ""
    }
    return (
        <div>
            {
                !session ? <>
                    <div className="flex items-center gap-3">
                        <Link
                            href="/sign-in"
                            className="btn inline-flex h-10 items-center justify-center rounded-lg bg-[#07963d] px-5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#078536] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07963d]"
                        >
                            Sign In
                        </Link>

                        <Link
                            href="/sign-up"
                            className="btn inline-flex h-10 items-center justify-center rounded-lg border border-[#07963d] bg-white px-5 text-sm font-medium text-[#07963d] transition-colors hover:bg-[#eef8f0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#07963d]"
                        >
                            Sign Up
                        </Link>
                    </div>
                </> :
                    <div>
                        <div className="flex justify-center items-center">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className='flex items-center gap-2 cursor-pointer'>
                                    <FaUserCircle className='text-4xl text-green-500' />
                                    <div>
                                        <h3 className='font-semibold'><UserName></UserName></h3>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={-1}
                                    className="menu menu-sm dropdown-content z-50 bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                                    <li className='hover:bg-transparent cursor-copy mb-2 py-2'>
                                        <p className='flex flex-col justify-start items-start leading-0 space-y-1'>
                                            <span className='font-bold'>
                                                <UserName></UserName>
                                            </span>
                                            <span className='text-gray-500'>
                                                <UserEmail></UserEmail>
                                            </span>
                                        </p>
                                    </li>
                                    <li>
                                        <Link href="/profile" className="justify-between">
                                            👤 আমার প্রোফাইল
                                        </Link>
                                    </li>
                                    <SignOutBtn></SignOutBtn>
                                </ul>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingInAndSingUpBtn;