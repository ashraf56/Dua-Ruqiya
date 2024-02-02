import Dua from '@/app/Component/Dua/Dua';
import getDuas from '@/utility/getDuas';
import React from 'react';

const Duapage = async({searchParams }) => {
  let {subcat_id,subcat_name_en}=searchParams
    let duas = await getDuas(subcat_id)
    return (
        <div className='bg-base-200'>
 <div className='card w-full card-body shadow-lg bg-white'> 
    <h1 className='  font-bold text-md'><span className='text-green-700 '>Section</span> {subcat_name_en}</h1>
 </div>
         <div className='grid grid-cols-1 gap-4 '>
         {
            duas.map(dua=>(
                <Dua key={dua.id} dua={dua} ></Dua>
            ))
           }
         </div>
        </div>
    );
};

export default Duapage;