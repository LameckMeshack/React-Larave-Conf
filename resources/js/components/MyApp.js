import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
function MyApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
export default MyApp;
if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
