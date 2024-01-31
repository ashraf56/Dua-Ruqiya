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
        <div className='w-[100px]  overflow-y-scroll py-5'>
            <ul className="menu menu-vertical bg-[#FFFFFF] gap-6 rounded-3xl items-center">
                <div className='pb-[145px]  '>
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
                <li >
                    <a >
                        <Image src={c} width={38} height={38} alt='icon' />
                    </a>
                </li>
                <li >
                    <a >
                        <Image src={bks} width={38} height={38} alt='icon' />
                    </a>
                </li>
                
                <div className='pt-[171px]'>
                    <Image src={sup} width={73} height={73} alt='icon' />
                </div>
            </ul>
        </div>
    );
};

export default SideNav;