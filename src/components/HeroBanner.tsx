import { dateTime } from "@/commonFeatures";
import heroImg from "@/assets/bazar-hero.png";
import Image from "next/image";

const HeroBanner = () => {
    return (
        <div className="px-4">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-green-50 via-white to-emerald-100 p-6 md:p-10 shadow-sm border border-green-100">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-200/30 blur-2xl" />
                <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-200/30 blur-2xl" />
                <div className="relative grid items-center gap-10 md:grid-cols-2">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            {dateTime}
                        </div>
                        <div className="space-y-3">
                            <h2 className="text-3xl font-extrabold leading-tight text-[#17221A] md:text-5xl">
                                আজকের বাজারের দাম
                                <span className="block text-green-600">
                                    এক নজরে
                                </span>
                            </h2>
                            <p className="max-w-xl text-sm leading-7 text-gray-600 md:text-base">
                                চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম—
                                বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
                                দামের পরিবর্তন এক জায়গায়।
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="btn rounded-xl border-0 bg-green-600 px-6 text-white shadow-lg shadow-green-600/20 hover:bg-green-700">
                                সব পণ্য দেখুন →
                            </button>
                            <button className="btn btn-outline rounded-xl border-green-200 bg-white/70 text-green-700 hover:border-green-600 hover:bg-green-50">
                                আজকের পরিবর্তন
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center md:justify-end">
                        <div className="absolute h-72 w-72 rounded-full bg-green-200/50 blur-3xl" />
                        <div className="relative flex h-full w-full max-w-md items-center justify-center">
                            <Image
                                src={heroImg}
                                alt="আজকের বাজারের পণ্য"
                                className="relative z-10 w-full object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;