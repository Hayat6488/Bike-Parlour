import React, { useContext } from 'react';
import './Error.css'
import pic from '../../Assets/error.png'

const Error = () => {

    return (
        <div className=' w-full bg-white py-16 flex justify-center items-center'>
            <div>
                <div className='error p-20 flex flex-col justify-center items-center h-fit'>
                    <img src={pic} alt="" />
                </div>
                <h2 className='text-2xl text-error'>
                    স্যার!!! ভুল পথে আসলাম না তো.... আরেকবার একটু দেখে নিবেন নাকি!!!
                </h2>
            </div>
        </div>
    );
};

export default Error;