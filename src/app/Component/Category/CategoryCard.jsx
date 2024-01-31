'use client'
import React, { useEffect, useState } from 'react';
import icon from '@/asset/005.png'
import Image from 'next/image';
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
                <div className="collapse-title text-md font-medium bg-gray-300  flex">
                    <Image src={icon} width={40} height={40} alt='i' />
                    <div>
                        <h1 className='text-md'>{all.cat_name_en}</h1>
                        <p>{all.no_of_subcat}</p>
                    </div>
                </div>
                <div className="collapse-content">
                    <div>{
                        subCat?.map((sc,indx) => (
                            <div key={sc.subcat_id} className='p-4 '>
                                <span>{indx}</span>
                                <h1 className='text-base'>{sc.subcat_name_en}</h1>
                            </div>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;