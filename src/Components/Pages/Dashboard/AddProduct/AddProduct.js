import React from 'react';

const AddProduct = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center items-center'>
                <div className='bg-white px-16 py-8 rounded-lg shadow-lg shadow-indigo-500/40'>
                    <form className='mb-4'>
                        <h1 className='text-3xl font-semibold'>Add Product</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Name: </span>
                                </label>
                                <input type="text" placeholder="FOOD NAME" className="input input-bordered input-accent w-56 md:w-72" name='serviceName' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Condition</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" name='condition'>
                                    <option>Excellent</option>
                                    <option>Good</option>
                                    <option>Fair</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Contact Number: </span>
                                </label>
                                <input type="text" placeholder="CONTACT NUMBER" className="input input-bordered input-accent w-56 md:w-72" name='number' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Location: </span>
                                </label>
                                <input type="text" placeholder="LOCATION" className="input input-bordered input-accent w-56 md:w-72" name='location' />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-2xl">Price: </span>
                                </label>
                                <input type="text" placeholder="PRICE" className="input input-bordered input-accent w-56 md:w-72" name='price' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Category:</span>
                                </label>
                                <select className="select select-bordered w-full max-w-xs" name='condition'>
                                    <option>Scrambler</option>
                                    <option>Standard</option>
                                    <option>Cruiser</option>
                                    <option>Caferacer</option>
                                    <option>Sports</option>
                                    <option>Scooty</option>
                                </select>
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Buying Price: </span>
                                </label>
                                <input type="text" placeholder="Buying PRICE" className="input input-bordered input-accent w-56 md:w-72" name='buyPrice' />
                            </div>
                            <div className="flex justify-start flex-col">
                                <label className="label">
                                    <span className="label-text text-xl">Year of Purchase: </span>
                                </label>
                                <input type="text" placeholder="YEAR OF PURCHASE" className="input input-bordered input-accent w-56 md:w-72" name='buyPrice' />
                            </div>
                        </div>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Picture: </span>
                            </label>
                            <input type="file" className="file-input file-input-bordered file-input-accent w-full max-w-xs" name='picture'/>
                        </div>
                        <div className="flex justify-start flex-col">
                            <label className="label">
                                <span className="label-text text-xl">Details: </span>
                            </label>
                            <textarea className="textarea rounded-md textarea-bordered textarea-accent  h-24 w-full" placeholder="FOOD DESCRIPTION" name='description'></textarea>
                        </div>
                        <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;