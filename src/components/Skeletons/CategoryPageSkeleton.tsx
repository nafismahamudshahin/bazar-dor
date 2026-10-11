
export default function CategoryPageSkeleton() {
    return (
        <div className="min-h-screen animate-pulse px-2 py-3">
            {/* Product Header */}
            <div className="rounded-xl border border-[#dce7df] bg-[#fbfdfb] px-4 py-3">
                <div className="flex items-center gap-3">
                    <div className="skeleton h-10 w-10 shrink-0 rounded-full" />

                    <div className="flex-1 space-y-2">
                        <div className="skeleton h-5 w-32" />
                        <div className="skeleton h-3 w-48 max-w-full" />
                    </div>
                </div>
            </div>

            {/* Filter / Sort */}
            <div className="mt-4 flex justify-end rounded-xl border border-[#dce7df] bg-[#fbfdfb] px-4 py-2">
                <div className="flex items-center gap-2">
                    <div className="skeleton h-3 w-8" />
                    <div className="skeleton h-8 w-36 rounded-lg" />
                </div>
            </div>

            {/* Product Count */}
            <div className="mt-3">
                <div className="skeleton h-3 w-40" />
            </div>

            {/* Product Cards */}
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-[#dce7df] bg-[#fbfdfb] p-4"
                    >
                        {/* Product Info */}
                        <div className="flex items-center gap-3">
                            <div className="skeleton h-12 w-12 shrink-0 rounded-xl" />

                            <div className="flex-1 space-y-2">
                                <div className="skeleton h-4 w-28" />
                                <div className="skeleton h-3 w-20" />
                            </div>
                        </div>

                        {/* Price */}
                        <div className="mt-5 flex items-center justify-between">
                            <div className="space-y-2">
                                <div className="skeleton h-3 w-20" />
                                <div className="skeleton h-6 w-28" />
                            </div>

                            <div className="skeleton h-8 w-16 rounded-lg" />
                        </div>

                        {/* Footer */}
                        <div className="mt-5 border-t border-[#e5ece6] pt-3">
                            <div className="skeleton h-3 w-32" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
