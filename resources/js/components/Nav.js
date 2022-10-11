import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import "./Nav.css";
import { signout } from "../Store/Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";

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
        // localStorage.clear();

        dispatch(signout());
        navigate("/login");
    };
    const user = useSelector((state) => state.userInfo.userInfo);

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
                <li>
                    <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to="/"
                    >
                        {" "}
                        Home{" "}
                    </NavLink>
                </li>

                {user ? (
                    <>
                        <li>
                            <NavLink
                                onClick={toggleClass}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/events"
                            >
                                {" "}
                                Events{" "}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={toggleClass}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/roles/departments"
                            >
                                {" "}
                                Roles and Departments{" "}
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
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink
                                onClick={toggleClass}
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>

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
                        <li
                            onClick={toggleSubmenu}
                            className="sub__menus__arrows"
                        >
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                                to="/register"
                            >
                                Register
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
            {/* <ul className={boxClass.join(" ")>
                

              
                  </ul> */}
            <Outlet />
        </div>
    );
};

export default Nav;
