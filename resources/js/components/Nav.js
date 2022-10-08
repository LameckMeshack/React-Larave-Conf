import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./Nav.css";
import { signout } from "../Store/Actions/UserAction";
import { useDispatch } from "react-redux";

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };
    let boxClass = ["nav__container"];
    if (isMenu) {
        boxClass.push("responsive__nav__show");
    } else {
        boxClass.push("");
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push("sub__menus__Active");
    } else {
        boxClassSubMenu.push("");
    }

    const handleSignout = () => {
        // clear localStorage
        localStorage.clear();

        dispatch(signout);
        navigate("/login");
    };

    return (
        <div className="nav">
            {isResponsiveclose === true ? (
                <>
                    <span
                        className="menubar__button"
                        style={{ display: "none" }}
                        onClick={toggleClass}
                    >
                        {" "}
                        <FiXCircle />{" "}
                    </span>
                </>
            ) : (
                <>
                    <span
                        className="menubar__button"
                        style={{ display: "none" }}
                        onClick={toggleClass}
                    >
                        {" "}
                        <FiAlignRight />{" "}
                    </span>
                </>
            )}
            <ul className={boxClass.join(" ")}>
                {/* Approach #1 --- Active  */}
                <li>
                    <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        Home
                    </NavLink>
                </li>

                {/* Approach #2 --- Active  */}
                <li>
                    <NavLink
                        onClick={toggleClass}
                        style={({ isActive }) => {
                            return {
                                color: isActive ? "green" : "",
                            };
                        }}
                        to="/login"
                    >
                        Login
                    </NavLink>
                </li>
                <li onClick={toggleSubmenu} className="sub__menus__arrows">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/register"
                    >
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/addevent"
                    >
                        Add Event
                    </NavLink>
                </li>
                <li onClick={toggleSubmenu} className="sub__menus__arrows">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        // to="/user"
                    >
                        Add Role and Dept <FiChevronDown />{" "}
                    </NavLink>
                    <ul className={boxClassSubMenu.join(" ")}>
                        <li>
                            <NavLink
                                onClick={toggleClass}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/admin/department"
                            >
                                Add Department
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={toggleClass}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/admin/role"
                            >
                                Add Role
                            </NavLink>
                        </li>
                    </ul>
                </li>

                <li>
                    <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/events"
                    >
                        {" "}
                        Events{" "}
                    </NavLink>
                </li>
                <li>
                    <button
                        onClick={handleSignout}
                        // className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Logout
                    </button>
                </li>
                <Outlet />
            </ul>
        </div>
    );
};

export default Nav;
