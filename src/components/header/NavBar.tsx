import Link from 'next/link';
import { FaCartPlus } from 'react-icons/fa';
import { dateTime } from "@/commonFeatures"
import SingInAndSingUpBtn from './SingInAndSingUpBtn';
const NavBar = () => {
    return (
        <nav className='bg-base-100 shadow-sm '>
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
    );
};

export default NavBar;