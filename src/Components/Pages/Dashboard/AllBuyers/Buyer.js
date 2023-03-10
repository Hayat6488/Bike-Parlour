import React from 'react';

const Buyer = ({ buyer, forceUpdate }) => {

    const { name, email, _id } = buyer;

    // Delete operation for buyers can be controlled by admin

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this Product?');
        if (proceed) {
            fetch(`https://bike-parlour-server.vercel.app/users/buyer/${id}`, {
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
                <div>
                    <div className="font-bold">{name}</div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{email}</div>
                </div>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>DELETE</button>
            </td>
        </tr>
    );
};

export default Buyer;