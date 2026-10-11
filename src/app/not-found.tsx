import Link from "next/link";
export default function NotFound() {
    return (
        <section className="flex min-h-[60vh] items-center justify-center bg-base-100 px-4">
            <div className="max-w-md text-center">
                <div className="text-7xl">🛒</div>

                <h1 className="mt-4 text-8xl font-black tracking-tight text-success">
                    404
                </h1>

                <h2 className="mt-3 text-2xl font-bold">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h2>

                <p className="mt-3 text-base-content/60">
                    আপনি যে পেজটি খুঁজছেন, সেটি পাওয়া যাচ্ছে না।
                    চলুন, আবার বাজারে ফিরে যাই!
                </p>

                <Link href="/" className="btn btn-success mt-6 rounded-xl px-6 text-white">
                    ← Back to Home
                </Link>
            </div>
        </section>
    );
}
