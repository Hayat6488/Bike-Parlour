import React, { useContext } from 'react';
import { AuthContext } from '../../../../../../Context/AuthProvider';

const Bikes = ({ bike }) => {

    const {user} = useContext(AuthContext);

    const { buyPrice, condition, date, des, img, location, name, number, price, used, year, _id, sellerName } = bike;

    const handleBooking = event => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
    }

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-left text-left">
                    <h2 className="card-title">{name}</h2>
                    <h1 className='text-lg font-semibold'>{sellerName}</h1>
                    <h1 className='text-lg font-semibold'>{location}</h1>
                    <h2 className="card-title">Condition:  {condition}</h2>
                    <div className='grid grid-cols-2'>
                        <h1 className='text-lg font-semibold'>Price: {price} Tk</h1>
                        <h1 className='text-lg font-semibold'>Original Price: {buyPrice}</h1>
                        <h1 className='text-lg font-semibold'>Used: {used} years</h1>
                        <h1 className='text-lg font-semibold'>{date}</h1>
                        <h1 className='text-lg font-semibold'>{bike?.verified}</h1>
                    </div>
                    <h1 className='text-lg font-semibold'>{des}</h1>
                    <div className="card-actions">
                        <label htmlFor="bookNow" className="btn btn-primary">open modal</label>
                    </div>
                </div>
            </div>

            {/* Modal */}

            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="bookNow" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="bookNow" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking}>
                            <h1 className='text-3xl font-semibold'>Book This Product</h1>
                            <div className=''>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Name: </span>
                                    </label>
                                    <input type="text" readOnly defaultValue={user?.name} className="input input-bordered input-accent w-56 md:w-72" name='name' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Email: </span>
                                    </label>
                                    <input type="text" readOnly defaultValue={user?.email} className="input input-bordered input-accent w-56 md:w-72" name='name' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Product: </span>
                                    </label>
                                    <input type="text" readOnly defaultValue={name} className="input input-bordered input-accent w-56 md:w-72" name='name' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Price: </span>
                                    </label>
                                    <input type="text" readOnly defaultValue={price} className="input input-bordered input-accent w-56 md:w-72" name='name' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Contact Number: </span>
                                    </label>
                                    <input type="text" className="input input-bordered input-accent w-56 md:w-72" name='number' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text text-2xl">Meet At: </span>
                                    </label>
                                    <input type="text" className="input input-bordered input-accent w-56 md:w-72" name='meet' />
                                </div>                                
                            </div>
                            <button type="submit" className='btn btn-outline btn-success mt-4 px-8 py-2 text-xl'>SUBMIT</button>
                        </form>
                </div>
            </div>

        </div>
    );
};

export default Bikes;