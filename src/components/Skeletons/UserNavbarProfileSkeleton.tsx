import React from 'react';

const UserNavbarProfileSkeleton = () => {
    return (
        <div className="flex animate-pulse items-center gap-2 rounded-lg p-1 sm:gap-3 sm:px-2">
            <div className="skeleton h-8 w-8 shrink-0 rounded-full sm:h-10 sm:w-10" />

            <div className="hidden min-w-0 md:block">
                <div className="skeleton h-4 w-24 rounded-md" />
            </div>
        </div>
    );
};

export default UserNavbarProfileSkeleton;