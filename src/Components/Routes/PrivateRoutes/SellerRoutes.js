import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useSeller from '../../hooks/useSeller';

import Loader from '../../Utility/Loader';

const SellerRoutes = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.uid);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }

    if(!user || !isSeller){
        logOut()
        .then(result => {
        })
        .catch(error => console.error('error: ', error))
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoutes;