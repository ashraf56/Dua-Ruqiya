import Image from 'next/image';
import React from 'react';
import q from '@/asset/Quran.png';
import bkmr from '@/asset/bookmark.svg';
import bks from '@/asset/books.svg';
import bttl from '@/asset/bottle.svg';
import c from '@/asset/comment.svg';
import l from '@/asset/light.svg';
import ald from '@/asset/alldua.svg';
import h from '@/asset/home.svg';
import sup from '@/asset/support.svg';

const SideNav = () => {
    return (
        <div className=' w-full lg:w-[100px] justify-center py-2'>
            <ul className=" menu w-full justify-center menu-horizontal  lg:menu-vertical bg-[#FFFFFF] gap-3 rounded-3xl items-center">
                <div className='pb-4 hidden lg:block '>
                    <Image src={q} width={73} height={73} alt='icon' />
                </div>
                <li >
                    <a >
                        <Image src={h} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li >
                    <a >
                        <Image src={ald} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li >
                    <a >
                        <Image src={l} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li >
                    <a >
                        <Image src={bkmr} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li >
                    <a >
                        <Image src={bttl} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li className='hidden lg:block'>
                    <a >
                        <Image src={c} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li className='hidden lg:block'>
                    <a >
                        <Image src={bks} width={38} height={38} alt='icon' />
                    </a>
                </li>

                <div className='pt-5 hidden lg:block '>
                    <Image src={sup} width={73} height={73} alt='icon' />
                </div>
            </ul>
        </div>
    );
};

export default SideNav;