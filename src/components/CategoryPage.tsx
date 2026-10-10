"use client";
import { toBanglaNumber } from '@/commonFeatures';
import { IProductType } from '@/types/types';
import ProductCard from './ProductCard';
import { useState } from 'react';
const CategoryPage = ({ category }: { category: IProductType[] }) => {
    const [selectFilter, setSelectFilter] = useState<string>("default")
    let sortedProductsCategory: IProductType[] = [...category];
    if (selectFilter == "asc") {
        sortedProductsCategory = sortedProductsCategory.sort((a, b) => a.today - b.today);
    } else if (selectFilter == "desc") {
        sortedProductsCategory = sortedProductsCategory.sort((a, b) => b.today - a.today);
    }
    return (
        <div className="min-h-screen px-2 py-3">
            <div className="">
                {/* Product Header */}
                <div className="rounded-xl border border-[#dce7df] bg-[#fbfdfb] px-4 py-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef2ee] text-2xl">
                            {category[0]?.categoryIcon}
                        </div>
                        <div>
                            <h1 className="text-lg font-bold leading-5 text-[#202820]">{category[0]?.categoryNameBn}</h1>
                            <p className="mt-0.5 text-[10px] text-gray-500">{category.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
                        </div>
                    </div>
                </div>
                {/* Filter / Sort */}
                <div className="mt-4 rounded-xl border border-[#dce7df] bg-[#fbfdfb] px-4 py-2">
                    <div className="flex items-center justify-end gap-2">
                        <span className="text-[10px] text-gray-500">সাজান</span>
                        <select onChange={(e) => setSelectFilter(e.target.value)} className="select select-sm h-8 min-h-8 w-auto rounded-lg border-[#d8e3da] bg-white px-3 text-[10px] text-gray-700 focus:border-green-500 focus:outline-none">
                            <option value="default">ডিফল্ট</option>
                            <option value="asc">ছোট থেকে বড়</option>
                            <option value="desc">বড় থেকে ছোট</option>
                        </select>
                    </div>
                </div>

                {/* Product List */}
                <div className="mt-3">
                    <p className="text-[10px] text-gray-500">
                        মোট {toBanglaNumber(category.length)}টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>
                {/* products card */}
                <div className='grid grid-cols-3 gap-5'>
                    {
                        sortedProductsCategory.map(p => <ProductCard key={p.id} product={p}></ProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;