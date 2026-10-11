"use client";
import { useSession } from '@/lib/auth-client';

const UserName = () => {
    const { data: sesstion } = useSession()
    return (
        <span>{sesstion?.user?.name}</span>
    );
};

export default UserName;