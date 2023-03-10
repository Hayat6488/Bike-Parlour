import React, { useEffect, useState } from 'react';

// find current loggen in user is admin or not

const useAdmin = (uid) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (uid) {
            fetch(`https://bike-parlour-server.vercel.app/users/admin/${uid}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [uid])
    return [isAdmin, isAdminLoading]
};

export default useAdmin;