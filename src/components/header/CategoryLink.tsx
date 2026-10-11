"use client";
import { ICategoryType } from '@/types/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CategorySkeleton from '../Skeletons/CategorySkeleton';

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
                toast.error(error as string)
            } finally {
                setLoading(false);
            }
        };
        fetchCategories();
    }, [])
    const path = usePathname();
    if (loading) {
        return <CategorySkeleton></CategorySkeleton>
    }
    return (
        <div className="container mx-auto px-3 py-3">
            <div className="flex flex-wrap gap-2">
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