import React from 'react';

const Seller = ({ seller, forceUpdate }) => {

    const { name, email, _id } = seller;

    // Delete operation for sellers or verify can be controlled by admin

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this Product?');
        if (proceed) {
            fetch(`http://localhost:5000/users/seller/${id}`, {
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

    const handleVerify = id => {

        const update = {
            verified: true
        }

        fetch(`http://localhost:5000/users/seller/${id}`, {
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
            {
                seller?.verified ? <td><h1 className='text-green-500 text-xl'>Verified</h1></td> : <td><h1 className='text-red-700 text-xl'>Not Verified</h1></td>
            }
            {
                !seller?.verified && <td>
                <button onClick={() => handleVerify(_id)} className='btn btn-ghost'>VERIFY</button>
            </td>
            }
            <td>
                <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>DELETE</button>
            </td>
        </tr>
    );
};

export default Seller;