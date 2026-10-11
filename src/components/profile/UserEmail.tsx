"use client";

import { useSession } from "@/lib/auth-client";

export default function UserEmail() {
    const { data: session } = useSession()
    return (
        <>
            <span >{session?.user?.email}</span>
        </>
    )
}
