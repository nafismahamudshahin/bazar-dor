import Link from 'next/link';
import { FaCartPlus, FaUserCircle } from 'react-icons/fa';
import { dateTime } from "@/commonFeatures"
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
                <div>
                    <div className="flex justify-center items-center">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className='flex items-center gap-2 cursor-pointer'>
                                <FaUserCircle className='text-4xl text-green-500' />
                                <div>
                                    <h3 className='font-semibold'>user name</h3>
                                </div>
                            </div>
                            <ul
                                tabIndex={-1}

                                className="menu menu-sm dropdown-content z-50 bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                                <li className='hover:bg-transparent cursor-copy mb-2 py-2'>
                                    <p className='flex flex-col justify-start items-start leading-0 space-y-1'>
                                        <span className='font-bold'>Rezwan Ahmed</span>
                                        <span className='text-gray-500'>rezwanahmed@gmail.com</span>
                                    </p>
                                </li>
                                <li>
                                    <a className="justify-between">
                                        👤 আমার প্রোফাইল

                                    </a>
                                </li>
                                <li className='text-red-500'><a>↩ সাইন আউট</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;