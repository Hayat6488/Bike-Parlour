import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/categories')
        .then(data => {
            setCategories(data.data);
        });
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-12 mx-8 gap-3'>
            {
                categories.map(category => <CategoryMenu key={category._id} category={category}></CategoryMenu>)
            }
        </div>
    );
};

export default Categories;