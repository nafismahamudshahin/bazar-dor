"use client";
import { signIn } from '@/lib/auth-client';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SocalLogin = () => {
    const handleContinueWithGoogle = async () => {
        const { error } = await signIn.social({
            provider: "google",
        })
        if (error) {
            toast.error("Please give me some valid information.");
        } else {
            toast.success("Wellcome to your Account.")
        }
    }
    const handleContinueWithGithub = async () => {
        const { error } = await signIn.social({
            provider: "github",
        })
        if (error) {
            toast.error("Please give me some valid information.");
        } else {
            toast.success("Wellcome to your Account.")
        }
    }
    return (
        <div className="grid grid-cols-2 gap-2">
            <button onClick={() => handleContinueWithGoogle()} type="button" className="btn h-9 min-h-9 rounded-lg border border-[#d8e3da] bg-white text-[10px] font-normal text-gray-700 hover:bg-gray-50">
                <FcGoogle size={20} />
                Google দিয়ে চালিয়ে যান
            </button>
            <button onClick={() => handleContinueWithGithub()} type="button" className="btn h-9 min-h-9 rounded-lg border border-[#d8e3da] bg-white text-[10px] font-normal text-gray-700 hover:bg-gray-50">
                <FaGithub size={20} />
                GitHub দিয়ে চালিয়ে যান
            </button>
        </div>
    );
};

export default SocalLogin;