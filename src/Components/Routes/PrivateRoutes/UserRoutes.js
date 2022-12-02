import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Loader from '../../Utility/Loader';

const UserRoutes = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.uid);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <Loader></Loader>
    }

    if (user && isBuyer) {
        return children;
    }

    if(!user || !isBuyer){
        logOut()
        .then(result => {
        })
        .catch(error => console.error('error: ', error))
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default UserRoutes;