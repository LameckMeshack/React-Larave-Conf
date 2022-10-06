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
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route
                path="/about"
                element={
                    <Protected isSignedIn={isSignedIn}>
                        <About />
                    </Protected>
                }
            /> */}
        </Routes>
    );
}
export default MyApp;

import { createRoot } from "react-dom/client";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <MyApp />
    </BrowserRouter>
);
