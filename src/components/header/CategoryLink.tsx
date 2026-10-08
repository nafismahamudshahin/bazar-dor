import { ICategoryType } from '@/types/types';
import Link from 'next/link';
import React from 'react';

const CategoryLink = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
    const categorys: ICategoryType[] = await res.json();
    return (
        <div className='flex gap-5 container mx-auto py-5 pl-5'>
            {
                categorys.map((category, id) => <Link key={id} href={`/categorys/${category.slug}`}>{`${category.icon}  ${category.nameBn}`}</Link>)
            }
        </div>
    );
};

export default CategoryLink;