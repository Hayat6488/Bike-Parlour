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
                <td>unsold</td>
                <th>
                    <button className="btn btn-ghost btn-xs">DELETE</button>
                </th>
            </tr>
    );
};

export default Row;