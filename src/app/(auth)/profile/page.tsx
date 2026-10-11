"use client";
import { useSession, signOut } from "@/lib/auth-client";
import { FormEvent } from "react";
import { CiLogout } from "react-icons/ci";

const ProfilePage = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // const formData = new FormData(e.currentTarget);
        // const name = formData.get("name");

        // console.log({ name });
    };
    const { data: session, isPending } = useSession()
    return (
        <div className="min-h-screen bg-[#f3f8f4] px-4 py-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-[#17221a]">আমার প্রোফাইল</h1>
                    <p className="mt-1 text-[11px] text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন</p>
                </div>
                <div className="rounded-2xl border border-[#dce7df] bg-[#fbfdfb] p-4">
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-[#eef3ef]">
                            </div>
                            <div>
                                <h2 className="text-sm font-bold text-[#202820]">{session?.user?.name}</h2>
                                <p className="mt-0.5 text-xs text-gray-500">{session?.user?.email}</p>
                            </div>
                        </div>
                        <button onClick={() => signOut()} type="button" className="btn btn-outline h-8 min-h-8 rounded-lg border-red-400 px-4 text-[11px] font-normal text-red-500 hover:bg-red-50">
                            <CiLogout size={15} /> সাইন আউট
                        </button>
                    </div>
                </div>
                <div className="mt-5 rounded-2xl border border-[#dce7df] bg-[#fbfdfb] p-5">
                    <h3 className="text-sm font-semibold text-[#202820]">তথ্য</h3>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div>
                            <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-[#202820]">নাম</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                defaultValue={session?.user?.name}
                                className="input input-sm h-9 w-full rounded-lg border-[#d8e3da] bg-white text-xs focus:border-green-500 focus:outline-none"
                            />
                        </div>
                        <button type="submit" className="btn mt-3 h-9 min-h-9 w-full rounded-lg border-0 bg-[#07963d] text-xs font-medium text-white hover:bg-[#078536]">আপডেট</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;