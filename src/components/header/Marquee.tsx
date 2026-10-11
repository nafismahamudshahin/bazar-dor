
import { toBanglaNumber, unitFinder } from '@/commonFeatures';
import { IProductType } from '@/types/types';
import Link from 'next/link';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';



const MarqueeHadeline = async () => {
    "use cache"
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const data: IProductType[] = await res.json();
    const products = data.slice(0, 10);
    return (
        <div className='py-1 my-1 bg-white border border-base-300'>
            <Marquee pauseOnHover speed={100}>
                {products.map((p) => (
                    <Link href={`/products/${p.slug}`}
                        className="flex items-center gap-4 mr-10"
                        key={p.id}
                    >
                        <span className='font-bold'>
                            {p.categoryIcon} {p.nameBn}
                        </span>

                        <span>
                            {toBanglaNumber(p.today)} টাকা/{unitFinder(p.unit)}
                        </span>

                        {p.change.dir === 'up' ? (
                            <span className="flex items-center text-red-600">
                                <FaCaretUp className='text-3xl' />
                                {toBanglaNumber(p.change.pct)}%
                            </span>
                        ) : (
                            <span className="flex items-center text-green-800">
                                <FaCaretDown className='text-3xl' />
                                {toBanglaNumber(p.change.pct)}%
                            </span>
                        )}
                    </Link>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeHadeline;