import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Checkout from './CheckOut/Checkout';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);



const Payment = () => {

    const product = useLoaderData();

    return (
        <div className='flex justify-center items-center w-full'>
            <div className='w-96 bg-white py-12 px-2 rounded-lg'>
                <h1 className='font-semibold text-2xl mb-2'>Pay for {product[0].product}</h1>
                <h1 className='font-semibold text-2xl mb-6'>Amount: {product[0].price} Tk</h1>
                <Elements stripe={stripePromise}>
                    <Checkout product={product[0]}/>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;