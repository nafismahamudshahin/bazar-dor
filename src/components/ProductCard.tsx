import { toBanglaNumber } from '@/commonFeatures';
import { IProductType } from '@/types/types';
import React from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { TfiLayoutLineSolid } from 'react-icons/tfi';

const ProductCard = ({ product }: { product: IProductType }) => {
    const priceChange = <>
        {
            product.change.dir == "up" ?
                <>
                    <span className={`${product.change.pct == 0 ? 'text-gray-600' : 'text-red-500'}`}>
                        {
                            product.change.pct == 0 ? <TfiLayoutLineSolid className='text-3xl' /> :
                                <FaCaretUp className='text-3xl' />
                        }
                    </span>
                    <span className={`${product.change.pct == 0 ? 'text-gray-600' : 'text-red-500'}`}>{toBanglaNumber(product.change.pct)}</span>
                </>
                :
                <>
                    <span className={`${product.change.pct == 0 ? 'text-gray-600' : 'text-green-500'}`}>
                        {
                            product.change.pct == 0 ? <TfiLayoutLineSolid className='text-3xl' /> :
                                <FaCaretDown className='text-3xl' />
                        }
                    </span>
                    <span className={`${product.change.pct == 0 ? 'text-gray-600' : 'text-green-500'}`}>{toBanglaNumber(product.change.pct)}</span>
                </>
        }
    </>
    return (
        <div className="w-full rounded-2xl border border-gray-200 bg-[#f8faf8] p-4 shadow-sm">
            {/* Top */}
            <div className="flex items-center gap-3">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef4ef] text-2xl">
                    {product.image}
                </div>

                {/* Product name */}
                <div>
                    <h3 className="text-base font-bold leading-5 text-[#202820]">
                        {product.nameBn}
                    </h3>

                    <p className="text-xs text-gray-600">
                        প্রতি কেজি
                    </p>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-4 flex items-end justify-between">
                <div>
                    <p className="text-xs text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-[#202820]">
                        {toBanglaNumber(product.today)} <span className="text-sm font-normal">টাকা</span>
                    </p>
                </div>

                {/* Price change */}
                <div className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-1 text-md font-semibold">
                    {priceChange}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;