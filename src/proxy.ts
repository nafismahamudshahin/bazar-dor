import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
    const response = await fetch(new URL("/api/auth/get-session", request.url), {
        headers: {
            cookie: request.headers.get("cookie") ?? "",
        },
        cache: "no-store",
    });

    if (!response.ok) {
        return NextResponse.json(
            { error: "Unable to verify session" },
            { status: 503 }
        );
    }
    const session = await response.json();
    if (!session) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    return NextResponse.next();
}
export const config = {
    matcher: ["/profile", "/products/:path*"],
};