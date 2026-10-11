const CategorySkeleton = () => {
    return (
        <div className="container mx-auto px-3 py-3">
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center gap-1.5 rounded-lg border border-[#dce7df] bg-white px-2 py-1.5"
                    >
                        <div className="skeleton h-3 w-3 rounded-full" />
                        <div
                            className={`skeleton h-3 rounded ${index % 3 === 0
                                ? "w-16"
                                : index % 3 === 1
                                    ? "w-20"
                                    : "w-12"
                                }`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySkeleton;