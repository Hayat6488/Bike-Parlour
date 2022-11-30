import React from 'react';
import { Link } from 'react-router-dom';

const Rows = ({ bike }) => {

    const { product, price, img, _id } = bike;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{product}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{price}</div>
                </div>
            </td>
            {
                bike.paid ?
                    <td className="font-bold">
                        <span className='ml-4 text-green-600'>Paid</span>
                    </td>
                    :
                    <td>
                        <Link to={`/dashboard/myorders/${_id}`}><button className="btn btn-ghost btn-xs"><span className="font-bold">Proceed to Pay</span></button></Link>
                    </td>

            }
        </tr>
    );
};

export default Rows;