import Image from 'next/image';
import React from 'react';
import CategoryCard from './CategoryCard';
import getCategory from '@/utility/getCategory';



const Category = async () => {
    let allCategory = await getCategory()
  
    return (
        <div className='w-[300px]  '>
            <div className='bg-green-700 text-white'>Category</div>
            <div>
                <input type='search' placeholder='search now ' className='w-full border-1' />

            </div>
            <div className=' '>
                <div className='grid grid-cols-1 gap-3'>
                    {
                        allCategory?.map((all,index) => (
                           <CategoryCard all={all} key={all.id} index={index}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;