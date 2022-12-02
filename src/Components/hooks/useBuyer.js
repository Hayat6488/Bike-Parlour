import React, { useEffect, useState } from 'react';

// find current loggen in user is buyer or not

const useBuyer = (uid) => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (uid) {
            fetch(`https://bike-parlour-server.vercel.app/users/buyer/${uid}`)
                .then(res => res.json())
                .then(data => {
                    setIsBuyer(data.isBuyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [uid])
    return [isBuyer, isBuyerLoading]
};

export default useBuyer;