import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa';
import { dateTime } from "@/commonFeatures"
import SingInAndSingUpBtn from './SingInAndSingUpBtn';
import { Suspense } from 'react';
import CategoryLink from './CategoryLink';
import MarqueeHadeline from './Marquee';
const NavBar = () => {
    return (
        <>
            <header className='sticky z-50 top-0 bg-[#f3f8f4]'>
                <nav className='bg-base-100 shadow-sm'>
                    <div className="container mx-auto navbar">
                        <div className="flex-1">
                            <Link href="/" className="text-xl flex items-center gap-2">
                                <div className='p-3 rounded-xl bg-green-500'>
                                    <FaCartPlus />
                                </div>
                                <div className='leading-none'>
                                    <h3 className='font-bold'> বাজার দর</h3>
                                    <p className='text-sm'>{dateTime}</p>
                                </div>
                            </Link>
                        </div>
                        <SingInAndSingUpBtn></SingInAndSingUpBtn>
                    </div>
                </nav>
                <Suspense fallback={""}>
                    <CategoryLink></CategoryLink>
                </Suspense>
                <MarqueeHadeline></MarqueeHadeline>
            </header>
        </>
    );
};
export default NavBar;