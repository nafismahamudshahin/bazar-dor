
export default function ProductDetailsSkeleton() {
    return (
        <div className="animate-pulse bg-[#f1f6f2] px-5 py-6">
            {/* Breadcrumb */}
            <div className="mb-6 flex gap-2">
                <div className="skeleton h-3 w-10" />
                <div className="skeleton h-3 w-4" />
                <div className="skeleton h-3 w-24" />
                <div className="skeleton h-3 w-20" />
            </div>

            {/* Product Card */}
            <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-[#dfe8e1] bg-[#fbfdfb] p-4 md:p-5">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="skeleton h-12 w-12 shrink-0 rounded-xl sm:h-16 sm:w-16" />

                    <div className="flex-1 space-y-2">
                        <div className="skeleton h-4 w-28 sm:w-40" />
                        <div className="skeleton h-3 w-16" />
                        <div className="skeleton h-3 w-32 sm:w-48" />
                    </div>
                </div>

                <div className="flex h-27 w-24 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-[#f0f5f0] p-3">
                    <div className="skeleton h-3 w-12" />
                    <div className="skeleton h-7 w-16" />
                    <div className="skeleton h-3 w-16" />
                    <div className="skeleton h-3 w-10" />
                </div>
            </div>

            {/* Market Statistics */}
            <div className="rounded-xl border border-[#dfe8e1] bg-[#fbfdfb] p-3 sm:p-4">
                <div className="skeleton mb-4 h-4 w-32" />

                <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className="rounded-xl border border-[#e5ece6] p-2 sm:p-3"
                        >
                            <div className="skeleton h-3 w-full max-w-20" />
                            <div className="skeleton mt-3 h-5 w-full max-w-24 sm:h-7" />
                            <div className="skeleton mt-2 h-3 w-full max-w-20" />
                        </div>
                    ))}
                </div>

                {/* Market Table */}
                <div className="skeleton mb-3 mt-5 h-4 w-40" />

                <div className="overflow-hidden rounded-lg border border-[#e5ece6]">
                    <div className="grid grid-cols-5 gap-2 bg-[#f7faf7] p-3">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="skeleton h-3 w-full" />
                        ))}
                    </div>

                    {[1, 2, 3, 4].map((item) => (
                        <div
                            key={item}
                            className="grid grid-cols-5 gap-2 border-t border-[#e5ece6] p-3"
                        >
                            {[1, 2, 3, 4, 5].map((col) => (
                                <div
                                    key={col}
                                    className="skeleton h-3 w-full"
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
