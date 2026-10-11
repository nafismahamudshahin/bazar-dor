"use client";
import SignOutBtn from "@/components/header/SignOutBtn";
import UserEmail from "@/components/profile/UserEmail";
import UserName from "@/components/profile/UserName";
import { updateUser, useSession } from "@/lib/auth-client";
import { FormEvent } from "react";
import { toast } from "react-toastify";
const ProfilePage = () => {
    const { data: session, isPending } = useSession()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if (session?.user?.name.toLowerCase() == name.toLowerCase().trim()) {
            toast.info("আপনার এই নামটি ইতোমধ্যে ব্যবহার করা হয়েছে।")
            return
        }
        const { error } = await updateUser({
            name: name.trim()
        })
        if (error) {
            toast.error("নাম আপডেট করা যায়নি। আবার চেষ্টা করুন।");
        } else {
            toast.success("আপনার নাম সফলভাবে আপডেট হয়েছে!");
        }
    };
    if (isPending) {
        return <p className="text-center min-h-110"><span className="loading loading-spinner text-accent"></span></p>
    }
    return (
        <div className="bg-[#f3f8f4] px-4 py-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-5">
                    <h1 className="text-xl font-bold text-[#17221a]">আমার প্রোফাইল</h1>
                    <p className="mt-1 text-[11px] text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন</p>
                </div>
                <div className="w-full rounded-xl border border-[#dce7df] bg-[#fbfdfb] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex flex-col gap-3 min-[360px]:flex-row min-[360px]:items-center min-[360px]:justify-between sm:gap-4">
                        <div className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3">
                            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[#eef3ef] sm:h-12 sm:w-12 sm:rounded-xl">
                            </div>

                            <div className="min-w-0 flex-1">
                                <h2 className="truncate text-sm font-bold text-[#202820] sm:text-base">
                                    <UserName />
                                </h2>

                                <p className="mt-0.5 break-all text-xs text-gray-500 sm:break-normal sm:truncate">
                                    <UserEmail />
                                </p>
                            </div>
                        </div>
                        <button
                            type="button"
                            className="btn list-none btn-outline h-8 min-h-8 shrink-0 rounded-lg border-red-400 px-3 text-xs font-normal text-red-500 hover:bg-red-50 sm:px-4"
                        >
                            <SignOutBtn />
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