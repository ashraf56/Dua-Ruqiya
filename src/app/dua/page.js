import Dua from '@/app/Component/Dua/Dua';
import getDuas from '@/utility/getDuas';
import React from 'react';

const Duapage = async({searchParams }) => {
  let {subcat_id,subcat_name_en}=searchParams
    let duas = await getDuas(subcat_id)
    return (
        <div className='p-10 h-[90vh] overflow-y-scroll'>
 <div className='card w-full card-body shadow-lg bg-white'> 
    <h1 className='  font-bold text-md'><span className=' text-[#1FA45B] '>Section</span> {subcat_name_en}</h1>
 </div>
         <div className='grid grid-cols-1 gap-4 pt-5'>
         {
          duas.length !== 0 ?   duas?.map((dua,index)=>(
                <Dua key={dua.id} dua={dua} index={index} ></Dua>
            )):  'selcect any dua'
           }
         </div>
        </div>
    );
};

export default Duapage;