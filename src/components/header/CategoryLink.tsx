"use client";
import { ICategoryType } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const loadCategory = async (): Promise<ICategoryType[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/categories");
    const categorys: ICategoryType[] = await res.json();
    return categorys;
}
const CategoryLink = () => {
    const [categories, setCategories] = useState<ICategoryType[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await loadCategory();
                setCategories(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCategories()
    }, [])
    const path = usePathname()
    console.log(path)
    if (loading) {
        return "Loading..."
    }
    return (
        // <div className="container mx-auto px-3 py-1 sm:px-4 sm:py-2 lg:px-6">
        // <div className="flex flex-wrap gap-2 overflow-x-auto sm:gap-3 scrollbar-hide">
        <div className="container mx-auto px-4 py-2 sticky z-50 top-17 bg-[#f3f8f4] mt-0.5">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/categorys/${category.slug}`}
                        className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors ${path === `/categorys/${category.slug}`
                            ? "border-[#07963d] bg-[#07963d] text-white"
                            : "border-[#dce7df] bg-white text-[#26382b] hover:border-[#07963d] hover:bg-[#eef8f0]"
                            }`}
                    >
                        <span>{category.icon}</span>
                        <span>{category.nameBn}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryLink;