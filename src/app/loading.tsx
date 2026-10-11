const Loading = () => {
    return (
        <div className="min-h-100 space-y-8 px-2 py-5">
            {/* Loading Header */}
            <div className="flex items-center justify-center gap-3">
                <span className="loading loading-spinner loading-lg text-success"></span>
                <h1 className="text-2xl font-bold text-success">
                    বাজারদর লোড হচ্ছে...
                </h1>
            </div>

            {/* Hero Skeleton */}
            <div className="skeleton h-48 w-full rounded-2xl sm:h-56 lg:h-64"></div>

            {/* Price Increase Skeleton */}
            <section className="space-y-4">
                <div className="skeleton h-8 w-48 rounded-lg"></div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <div
                            key={index}
                            className="card border border-base-300 bg-base-100 shadow-sm"
                        >
                            <div className="card-body gap-4 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="skeleton h-14 w-14 shrink-0 rounded-xl"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="skeleton h-5 w-3/4"></div>
                                        <div className="skeleton h-3 w-1/2"></div>
                                    </div>
                                </div>

                                <div className="skeleton h-10 w-full rounded-lg"></div>

                                <div className="flex justify-between gap-3">
                                    <div className="skeleton h-4 w-1/3"></div>
                                    <div className="skeleton h-4 w-1/3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* All Products Skeleton */}
            <section className="space-y-4">
                <div className="skeleton h-8 w-32 rounded-lg"></div>
                <div className="skeleton h-4 w-52 rounded-md"></div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="card border border-base-300 bg-base-100 shadow-sm"
                        >
                            <div className="card-body gap-4 p-4">
                                <div className="flex items-center gap-3">
                                    <div className="skeleton h-14 w-14 shrink-0 rounded-xl"></div>
                                    <div className="flex-1 space-y-2">
                                        <div className="skeleton h-5 w-3/4"></div>
                                        <div className="skeleton h-3 w-1/2"></div>
                                    </div>
                                </div>

                                <div className="skeleton h-10 w-full rounded-lg"></div>
                                <div className="skeleton h-4 w-full rounded-md"></div>
                                <div className="skeleton h-4 w-2/3 rounded-md"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Loading;