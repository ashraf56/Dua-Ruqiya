'use client'
import React, { useEffect, useState } from 'react';
import icon from '@/asset/catIcon.png'
import Image from 'next/image';
import Link from 'next/link';
const CategoryCard = ({ all }) => {
    const [subCat, setSubcat] = useState([])
    //get all subcategories 
    useEffect(() => {
        fetch(`https://dua-server.onrender.com/categories/${all.cat_id}/subcategories`)
            .then(res => res.json()).then(data => {

                setSubcat(data)
            })
    }, [all.cat_id])




    return (
        <div >
            <div className="  collapse  bg-[#F9F9F9] hover:bg-[#E8F0F5] join-item border border-base-300 rounded-lg" key={all.id}>

                <input type="radio" name="my-accordion-4" className='peer' />
                <div className="collapse-title   flex justify-between  peer-checked:bg-[#E8F0F5] peer-checked:text-[#1FA45B]" >

                    <div className='flex gap-3'>   <div className=' ' >
                        <Image src={icon} width={40} height={40} alt='i' />
                    </div>
                        <div>
                            <h1 className='text-base font-[600] '>{all.cat_name_en} </h1>
                            <p className='text-sm font-[400] text-[#7E7E7E]'> <span>Subcategory:</span>{all.no_of_subcat}</p>
                        </div>     </div>

                    <div className='text-center '>
                        <h1>{all.no_of_dua}</h1>
                        <p className='text-sm font-[400] text-[#7E7E7E]'>Duas</p>
                    </div>

                </div>

                <div className="collapse-content hover:bg-[#F9F9F9] ">
                    <ul className='list-disc  list-inside '>

                        {
                            subCat?.map((sc, indx) => (

                                <li key={sc.subcat_id} className=' py-2 text-base hover:text-[#1FA45B] '>
                                    <Link href={`/dua?subcat_name_en=${sc.subcat_name_en}&subcat_id=${sc.subcat_id}`}> {sc.subcat_name_en}  </Link>
                                </li>


                            ))
                        }    </ul>

                </div>
            </div>


        </div>


    );
};

export default CategoryCard;