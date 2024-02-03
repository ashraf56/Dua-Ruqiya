'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import getCategory from '@/utility/getCategory';
import s from '@/asset/search.svg'



const Category = () => {
    const [allCategory, setAllCategory] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            let categories = await getCategory();
            setAllCategory(categories);
        };

        fetchData();
    }, []);


    return (
        <div className='w-full mb-4 lg:w-96  xl:max-w-2xl '>
            <div>
                <div className='bg-[#1FA45B] text-white pt-4 pr-32 pb-4 pl-32 rounded-t-lg'><h1 className='text-lg font-[600] text-center'>
                    Category
                </h1></div>
                <div className='px-3 bg-white py-5 relative'>
                    <Image src={s} width={24} height={24} alt='s' className='absolute top-8 left-5 '></Image>
                    <input type="text" placeholder="Search by Categories" className="input input-bordered w-full max-w-full ps-10" />

                </div>
            </div>


            <div className='gap-3 join join-vertical w-full lg:max-w-sm xl:max-w-2xl  h-[500px] overflow-y-auto  '>
                <div>
                    {
                        allCategory.length === 0 ? 'loading..' : allCategory?.map((all, index) => (
                            <CategoryCard all={all} key={all.id} index={index} 
                                onClick={() => handleCollapseClick(index)} />
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default Category;