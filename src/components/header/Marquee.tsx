
import { IProductType } from '@/types/types';
import React from 'react';
import Marquee from "react-fast-marquee";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const toBanglaNumber = (number: number | string) => {
    const banglaDigits = '০১২৩৪৫৬৭৮৯';

    return String(number).replace(/\d/g, (digit) => banglaDigits[Number(digit)]);
};


const MarqueeHadeline = async () => {
    "use cache"
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products");
    const data: IProductType[] = await res.json();
    const products = data.slice(0, 10);
    console.log(products)
    return (
        <div className='py-5 border border-base-200'>
            <Marquee>
                {products.map((p) => (
                    <span
                        className="flex items-center gap-4 mr-10"
                        key={p.id}
                    >
                        <span className='font-bold'>
                            {p.categoryIcon} {p.nameBn}
                        </span>

                        <span>
                            {toBanglaNumber(p.today)} টাকা/কেজি
                        </span>

                        {p.change.dir === 'up' ? (
                            <span className="flex items-center text-red-600">
                                <FaCaretUp className='text-3xl' />
                                {toBanglaNumber(p.change.pct)}%
                            </span>
                        ) : (
                            <span className="flex items-center text-green-600">
                                <FaCaretDown className='text-3xl' />
                                {toBanglaNumber(p.change.pct)}%
                            </span>
                        )}
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default MarqueeHadeline;