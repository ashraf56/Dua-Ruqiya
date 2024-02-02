import React from 'react';
import a from '@/asset/allah.svg'
import Image from 'next/image';
const Dua = ({dua}) => {
    const {dua_name_en,refference_en,audio,bottom_en,translation_en,dua_arabic,top_en} = dua
    return (
        <div className='bg-white'>
            <div className='card max-w-full shadow-md py-10'>
<div className='card-body'>
<div className='flex gap-2'><Image src={a} width={35} height={35} alt='a' ></Image> <span className='text-green-700'>{dua_name_en}</span> </div>
<p className='py-1 text-base'>{top_en}</p>
<p className='text-right text-2xl'>{dua_arabic}</p>
<p>{translation_en}</p>


</div>
            </div>
           
        </div>
    );
};

export default Dua;