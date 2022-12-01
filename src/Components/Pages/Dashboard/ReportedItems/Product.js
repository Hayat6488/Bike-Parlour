import React from 'react';

const Product = ({ bike, forceUpdate }) => {

    console.log(bike);

    const { _id, name, img, price } = bike;


    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure you want to delete this Product?');
        if (proceed) {
            fetch(`http://localhost:5000/reported/${_id}`, {
                method: 'DELETE',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    forceUpdate();
                })
        }
    }

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
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><span className="font-bold">DELETE</span></button>
                </th>
            </tr>
        ); 
    }

export default Product;