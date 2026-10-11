import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-base-300 mt-10  border-t border-base-300'>
            <div className='flex flex-col  justify-center items-center text-gray-500 md:flex-row md:justify-between container mx-auto py-10'>
                <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
                <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </footer>
    );
};

export default Footer;