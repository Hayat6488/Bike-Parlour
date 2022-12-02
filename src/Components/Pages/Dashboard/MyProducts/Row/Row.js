import React from 'react';

const Row = ({ product, forceUpdate }) => {

    const { _id, name, img, price } = product;

    const handleadvertise = (_id) => {

        const update = {
            advertise: true
        }

        fetch(`http://localhost:5000/myproducts/advert/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data);
                    forceUpdate();                   
                }
            })



    }

    const handleDelete = (_id) => {
        const proceed = window.confirm('Are you sure you want to delete this Product?');
        if (proceed) {
            fetch(`http://localhost:5000/myproducts/${_id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
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
            {
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

            }
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><span className="font-bold">DELETE</span></button>
            </th>
        </tr>
    );
};

export default Row;