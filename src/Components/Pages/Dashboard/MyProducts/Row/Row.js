import React from 'react';

const Row = ({ product }) => {

    const {_id, name, img, price} = product;

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
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                <div>
                            <div className="font-bold">{price}</div>
                        </div>
                </td>
                {
                    !product.advertise ? 
                    <td className="font-bold">Sold</td>
                    :
                    <td className="font-bold"><button className="btn btn-ghost btn-xs"><span className="font-bold">Advertise</span></button></td>
                }
                <th>
                    <button className="btn btn-ghost btn-xs"><span className="font-bold">DELETE</span></button>
                </th>
            </tr>
    );
};

export default Row;