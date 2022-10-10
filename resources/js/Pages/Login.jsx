import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LoadingBox from "../components/common/LoadingBox";
import MessageBox from "../components/common/MessageBox";
import { AuthContext } from "../Context/AuthContext";
import { signin } from "../Store/Actions/UserAction";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    // using context hook to check whether user is logged in or not
    // const user = useContext(AuthContext);
    // console.log(user);

    const userSignin = useSelector((state) => state.userInfo);
    const { loading, error, userInfo } = userSignin;

    //  const { userInfo, loading, error } = userSignin;
    const handleLogin = (e) => {
        e.preventDefault();
        // if login details are empty elert

        if (loginData.email === "" || loginData.password === "") {
            alert("Please fill all the fields");
        } else {
            dispatch(signin(loginData.email, loginData.password));
        }
    };

    useEffect(() => {
        if (userInfo) {
            navigate("/events");
        } else {
            navigate("/login");
        }
    }, [userInfo]);

    return (
        <div className="flex h-screen bg-green-700">
            <div className="w-full max-w-xs m-auto bg-green-100 rounded p-5">
                {/* <login-header> */}
                <h1 className="font-bold text-3xl text-center text-gray-900">
                    LOGIN
                </h1>
                <img
                    className="w-20 mx-auto mb-5"
                    src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                />
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                {/* </login-header> */}
                <form className="w-full" onSubmit={handleLogin}>
                    <div className=" w-full   mb-5">
                        <label
                            htmlFor=""
                            className="text-xs font-semibold px-1"
                        >
                            Name
                        </label>
                        <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                            <input
                                type="text"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Liaison"
                                required
                                // value={loginData.email}
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                    <div className="  mb-5">
                        <label
                            htmlFor=""
                            className="text-xs font-semibold px-1"
                        >
                            Password
                        </label>
                        <div className="flex">
                            <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                            <input
                                type="password"
                                className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                placeholder="Password"
                                required
                                // value={loginData.password}
                                onChange={(e) =>
                                    setLoginData({
                                        ...loginData,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <input
                            className="w-full bg-green-700 hover:bg-green-200 text-white hover:text-gray-700 font-bold py-2 px-4 mb-6 rounded"
                            type="submit"
                        />
                    </div>
                </form>
                <login-footer>
                    <Link
                        to="/login"
                        className="text-gray-700 hover:text-gray-200 text-sm float-left"
                        href="#"
                    >
                        Forgot Password?
                    </Link>
                    <Link
                        to="/register"
                        className="text-gray-700 hover:text-gray-200 text-sm float-right"
                        href="#"
                    >
                        Create Account
                    </Link>
                </login-footer>
            </div>
        </div>
    );
}

export default Login;
