"use client";
import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';
import { toast } from 'react-toastify';

const SignOutBtn = () => {
    const router = useRouter();
    const handleSignOut = async () => {
        const { error } = await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/sign-in");
                },
            },
        })
        if (error) {
            toast.error("লগআউট করা যায়নি। আবার চেষ্টা করুন।");
        } else {
            toast.success("সফলভাবে লগআউট হয়েছে!");
        }
    }

    return (
        <>
            <li onClick={() => handleSignOut()} className='text-red-500'><a className='flex gap-2'><CiLogout size={15} /> সাইন আউট</a></li>
        </>
    );
};

export default SignOutBtn;