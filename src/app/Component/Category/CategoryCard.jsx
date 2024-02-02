'use client'
import React, { useEffect, useState } from 'react';
import icon from '@/asset/005.png'
import Image from 'next/image';
import Link from 'next/link';
const CategoryCard = ({ all, key, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [subCat, setSubcat] = useState([])
    //get all subcategories 
    useEffect(() => {
        fetch(`http://localhost:5000/categories/${all.cat_id}/subcategories`)
            .then(res => res.json()).then(data => {
               
                setSubcat(data)
            })
    }, [all.cat_id])
    return (
        <div >
          
           <div onClick={() => setIsOpen(!isOpen)} className={`collapse  bg-base-200  `}
                key={key} >
                <input
                    type="radio"
                    name="my-accordion-4"

                />
               
               <div className=" collapse-title text-md font-medium bg-gray-300  flex">
                    <Image src={icon} width={40} height={40} alt='i' />
                    <div>
                       
                  <li>
                   {all.cat_name_en} 
                    
                    </li>     
                     
                        <p>{all.no_of_subcat}</p>
                        <p>{all.no_of_dua}</p>
                    </div>
                </div>
                <div className="collapse-content">
                    <div>{
                        subCat?.map((sc,indx) => (
                            <div key={sc.subcat_id} className='p-4 '>
                                <span>{indx}</span>
                               
                                <Link href={`/dua?subcat_name_en=${sc.subcat_name_en}&subcat_id=${sc.subcat_id}`}> <h1 className='text-base'>{sc.subcat_name_en}</h1>  </Link>   
                               {sc.no_of_dua}
                            </div>
                        ))
                    }</div>
                </div>
            </div>  
        </div>
    );
};

export default CategoryCard;