import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const userSignin = useSelector((state) => state.userInfo);
    const { loading, error, userInfo } = userSignin;
    return userInfo ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
