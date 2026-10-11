"use client";
import { signOut } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { CiLogout } from 'react-icons/ci';

const SignOutBtn = () => {
    const router = useRouter();
    const handleSignOut = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.replace("/sign-in");
                },
            },
        })
    }

    return (
        <>
            <li onClick={() => handleSignOut()} className='text-red-500'><a className='flex gap-2'><CiLogout size={15} /> সাইন আউট</a></li>
        </>
    );
};

export default SignOutBtn;