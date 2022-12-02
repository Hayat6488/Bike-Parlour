import React from 'react';

const Loader = () => {
    return (
        <div className='mt-16 w-full flex justify-center'>
            <div class="spinner-border animate-spin inline-block w-8 h-8  border-dashed border-4 border-red-700 rounded-full" role="status">
                <span class="visually-hidden text-2xl  text-warning font-extrabold "></span>
            </div>
        </div>
    );
};

export default Loader;