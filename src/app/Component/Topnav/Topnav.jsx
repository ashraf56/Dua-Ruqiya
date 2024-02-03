import Image from 'next/image';
import React from 'react';
import pr from '@/asset/profile.svg'
import s from '@/asset/search.svg'
const Topnav = () => {
    return (
        <div className='max-w-full mb-4'>
            <div className="navbar bg-base-300">
                <div className="navbar-start">

                    <a className="btn btn-ghost font-[600] text-xl">Dua Page</a>
                </div>
                <div className="navbar-end  lg:flex">
                    <div className='flex rounded-md bg-white items-center me-20'>

                        <input type="text" placeholder="Search by Dua Name" className="input  w-[371px] h-[52px] max-w-lg " /> <button className='btn  h-[44px]'>
                            <Image src={s} width={24} height={24} alt='s'  ></Image>
                        </button>

                    </div>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="profile.svg'" src={pr} width={20} height={20} />
                            </div>
                        </div>

                    </div>

                    <div className="">
                        <div >
                            <div className="w-10 justify-center items-center ps-2">
                                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.79241 5.97063C5.3921 6.49064 4.6079 6.49064 4.20759 5.97063L1.04322 1.85999C0.537025 1.20243 1.00579 0.25 1.83563 0.25L8.16437 0.250001C8.99421 0.250001 9.46298 1.20243 8.95678 1.86L5.79241 5.97063Z" fill="#868686" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Topnav;