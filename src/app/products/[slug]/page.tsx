import { toBanglaNumber, unitFinder } from "@/commonFeatures";
import { IProductType } from "@/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { TfiLayoutLineSolid } from "react-icons/tfi";

const ProductDetailsCard = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const res = await fetch("https://api.abcz.workers.dev/api/bazardor/products");
    const products: IProductType[] = await res.json();
    const product = products.find(p => p.slug === slug);
    if (!product) {
        return notFound();
    }
    const maxPriceList: number[] = product.markets.map(m => Number(m.max))
    const minPriceList: number[] = product.markets.map(m => Number(m.min))
    const maxPrice = Math.max(...maxPriceList)
    const minPrice = Math.min(...minPriceList)
    return (
        <div className="bg-[#f1f6f2] px-5 py-6">
            <div className="mb-5">
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-xs text-[#59645b]">
                    <Link href="/">হোম</Link>
                    <span>›</span>
                    <Link href="/categorys">{product.categoryNameBn}</Link>
                    <span>›</span>
                    <span className="text-[#273229]">
                        {product.nameBn}
                    </span>
                </div>

                {/* Product Card */}
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#dfe8e1] bg-[#fbfdfb] p-4 md:p-5">

                    {/* Product Information */}
                    <div className="flex min-w-0 items-center gap-3">

                        {/* Product Icon */}
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                            {product.image}
                        </div>

                        {/* Product Name */}
                        <div className="min-w-0">
                            <h1 className="text-xl font-bold leading-tight text-[#202820] md:text-3xl">
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-xs text-gray-500">
                                প্রতি {unitFinder(product.unit as string)}
                            </p>

                            <p className="mt-2 text-[11px] text-[#263329] md:text-xs">
                                গতকালের তুলনায় আজ দাম বেড়েছে · ২ টাকা
                            </p>
                        </div>
                    </div>

                    {/* Price Box */}
                    <div className="flex h-27 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-[#f0f5f0] px-2 text-center">
                        <p className="text-[10px] text-gray-500">
                            আজকের দাম
                        </p>

                        <p className="text-2xl font-extrabold leading-tight text-[#202820]">
                            {toBanglaNumber(product.today)}
                        </p>

                        <p className="text-[11px] text-gray-500">
                            টাকা / {unitFinder(product.unit)}
                        </p>
                        <p className="flex">
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
                        </p>
                    </div>

                </div>
            </div>

            <div className="rounded-xl border border-[#dfe8e1] bg-[#fbfdfb] p-3 sm:p-4">
                {/* Statistics Heading */}
                <h2 className="mb-3 text-xs font-bold text-[#263329]">
                    বাজার পরিসংখ্যান
                </h2>

                {/* Statistics Cards */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-[#e5ece6] p-3">
                        <p className="text-[10px] text-gray-500">
                            সর্বনিম্ন দাম
                        </p>
                        <p className="mt-1 text-sm font-bold text-green-600">
                            {toBanglaNumber(minPrice)} টাকা
                        </p>
                        <p className="mt-1 text-[9px] text-gray-500">
                            সর্বনিম্ন দামের বাজার
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#e5ece6] p-3">
                        <p className="text-[10px] text-gray-500">
                            সর্বোচ্চ দাম
                        </p>
                        <p className="mt-1 text-sm font-bold text-red-500">
                            {toBanglaNumber(maxPrice)} টাকা
                        </p>
                        <p className="mt-1 text-[9px] text-gray-500">
                            সর্বোচ্চ দামের বাজার
                        </p>
                    </div>

                    <div className="rounded-xl border border-[#e5ece6] p-3">
                        <p className="text-[10px] text-gray-500">
                            গড় দাম
                        </p>
                        <p className="mt-1 text-sm font-bold text-green-600">
                            {toBanglaNumber((minPrice + maxPrice) / 2)} টাকা
                        </p>
                        <p className="mt-1 text-[9px] text-gray-500">
                            সব বাজারের গড় হিসাবে
                        </p>
                    </div>
                </div>
                {/* Market Table Heading */}
                <h3 className="mb-2 mt-4 text-xs font-bold text-[#263329]">
                    বাজারভিত্তিক বিস্তারিত দাম
                </h3>
                {/* Market Table */}
                <div className="overflow-x-auto rounded-lg border border-[#e5ece6]">
                    <table className="table table-md w-full">
                        <thead>
                            <tr className="bg-[#f7faf7] text-[12px] text-gray-600">
                                <th className="font-medium">বাজার</th>
                                <th className="font-medium">বিভাগ</th>
                                <th className="text-right font-medium">সর্বনিম্ন</th>
                                <th className="text-right font-medium">সর্বোচ্চ</th>
                                <th className="text-right font-medium">গড়</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                product.markets.map((d, idx) => (
                                    <tr key={idx} className="text-[12px]">
                                        <td>{d.division}</td>
                                        <td>{d.market}</td>
                                        <td className="text-right">{toBanglaNumber(d.min)} টাকা</td>
                                        <td className="text-right">{toBanglaNumber(d.max)} টাকা</td>
                                        <td className="text-right font-semibold">{toBanglaNumber((d.min + d.max) / 2)} টাকা</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;