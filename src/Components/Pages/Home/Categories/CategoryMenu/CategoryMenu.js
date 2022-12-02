import React from 'react';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ category }) => {

    const { _id, name, img } = category;

    return (
        <div>
            <Link to={`/category/${name}`}>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img className='h-60 w-full' src={img} alt={name} /></figure>
                    <div className='flex justify-center my-2'>
                        <h2 className="card-title text-2xl font-semibold">{name}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CategoryMenu;