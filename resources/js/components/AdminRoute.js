import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const userSignin = useSelector((state) => state.userInfo);
    const { loading, error, userInfo } = userSignin;
    return userInfo && userInfo.user.isAdmin ? (
        children
    ) : (
        <Navigate to="/login" />
    );
};
export default AdminRoute;
