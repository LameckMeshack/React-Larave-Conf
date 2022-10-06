import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "../Pages/About";
import Home from "../Pages/Home";
import Protected from "./Protected";
function MyApp() {
    const [isSignedIn, setIsSignedIn] = useState(true);
    // const signin = () => {
    //     setIsSignedIn(true);
    // };
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addevent" element={<AddEvent />} />
                <Route path="/trial" element={<Trial />} />
                {/* nested admin route */}
                {/* <Route path="/admin"> */}
                <Route
                    index
                    path="admin/department"
                    element={<AddDepartment />}
                />
                <Route path="admin/role" element={<AddRoles />} />
                {/* </Route> */}

                {/* <Route
                path="/about"
                element={
                    <Protected isSignedIn={isSignedIn}>
                        <About />
                    </Protected>
                }
            /> */}
            </Routes>
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
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <MyApp />
    </BrowserRouter>
);
