import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "../Pages/About";
import Home from "../Pages/Home";
import Protected from "./Protected";
function MyApp() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRoles());
        dispatch(getDepartments());
    }, []);

    return (
        <>
            <Nav />
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/register"
                        element={
                            <AdminRoute>
                                <Register />
                            </AdminRoute>
                        }
                    />
                    <Route path="/addactivity" element={<AddActivity />} />
                    <Route
                        path="/events/:id"
                        element={
                            <PrivateRoute>
                                <SingleEvent />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/addevent"
                        element={
                            <PrivateRoute>
                                <AddEvent />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/roles/departments"
                        element={
                            <AdminRoute>
                                <RolesDepartments />
                            </AdminRoute>
                        }
                    />
                    <Route path="/trial" element={<Trial />} />
                    <Route
                        path="/events"
                        element={
                            <PrivateRoute>
                                <EventContainer />
                            </PrivateRoute>
                        }
                    />
                    {/* nested admin route */}
                    {/* <Route path="/admin"> */}
                    <Route
                        index
                        path="admin/department"
                        element={
                            <AdminRoute>
                                <AddDepartment />
                            </AdminRoute>
                        }
                    />
                    <Route
                        path="admin/role"
                        element={
                            <AdminRoute>
                                <AddRoles />
                            </AdminRoute>
                        }
                    />
                </Routes>
            </div>
            <Footer />
        </>
    );
}
export default MyApp;

import { createRoot } from "react-dom/client";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddEvent from "./AddEvent";
import Trial from "./Trial";
import Nav from "./Nav";
import AddDepartment from "./AddDepartment";
import AddRoles from "./AddRoles";
import EventCard from "./EventCard";
import EventContainer from "./EventContainer";
import store from "../Store/store";
import { Provider, useDispatch } from "react-redux";
import { AuthProvider } from "../Context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SingleEvent from "./SingleEvent";
import Footer from "./Footer";
import RolesDepartments from "./RolesDepartments";
import { getRoles } from "../Store/Actions/RoleActions";
import { getDepartments } from "../Store/Actions/DepartmentAction";
import AddActivity from "./AddActivity";
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <AuthProvider>
                <MyApp />
            </AuthProvider>
        </Provider>
    </BrowserRouter>
);
