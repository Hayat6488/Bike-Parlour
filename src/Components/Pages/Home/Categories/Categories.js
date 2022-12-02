import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('https://bike-parlour-server.vercel.app/categories')
            .then(data => {
                setCategories(data.data);
            });
    }, [])

    return (
        <div className='mx-36 mt-16'>
            <h1 className='text-3xl font-semibold mb-8'>Types of Bikes We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>

                {
                    categories.map(category => <CategoryMenu key={category._id} category={category}></CategoryMenu>)
                }
            </div>
        </div>
    );
};

export default Categories;