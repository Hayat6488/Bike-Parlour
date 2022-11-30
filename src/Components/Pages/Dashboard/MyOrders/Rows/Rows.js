import React from 'react';

const Rows = ({ bike }) => {

    const {product, price, img, _id} = bike;

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
            {/* {
                product.sold ?
                    <td className="font-bold">
                        <span className='ml-4'>Sold</span>
                    </td>
                    :
                    !product.sold &&
                        product.advertise ?
                        <td className="font-bold">
                            <span className='ml-4 text-green-500'>Advertised</span>
                        </td>
                        :
                        <td>
                            <button onClick={() => handleadvertise(_id)} className="btn btn-ghost btn-xs"><span className="font-bold">ADVERTISE</span></button>
                        </td>

            } */}

            <th>
                <button className="btn btn-ghost btn-xs"><span className="font-bold">DELETE</span></button>
            </th>
        </tr>
    );
};

export default Rows;