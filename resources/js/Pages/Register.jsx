import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Register() {
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    console.log(user);

    // useEffect(() => {
    //     if (user) {
    //         navigate("/events");
    //     } else return;
    // }, [user]);
    return (
        <div className="min-w-screen min-h-screen bg-green-700 flex items-center justify-center px-5 py-5">
            <div
                className="bg-green-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                style={{ maxWidth: "1000px" }}
            >
                <div className="w-full">
                    <div className="w-full py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">
                                REGISTER
                            </h1>
                            <img
                                className="w-20 mx-auto mb-5"
                                src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                            />
                        </div>
                        <form>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
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
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Email
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="email"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="ccyton@gmail.com"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
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
                                            placeholder="Liaison"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="confirm password"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor=""
                                        className="text-xs font-semibold px-1"
                                    >
                                        Role
                                    </label>
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option className="text-gray-700">
                                                Select Department
                                            </option>

                                            <option>Department1</option>
                                            <option>Department2</option>
                                            <option>Department2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Department
                                    </label>
                                    {/* select box */}
                                    <div className="relative">
                                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option className="text-gray-700">
                                                Select Department
                                            </option>

                                            <option>Department1</option>
                                            <option>Department2</option>
                                            <option>Department2</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor=""
                                        className="text-xs font-semibold px-1"
                                    >
                                        Phone
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="tel"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="07@4#$#%$%#$"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Photo
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="file"
                                            // className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            className="w-full
                                            -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 bg-white border-gray-200 outline-none focus:border-indigo-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-5">
                                    <button
                                        className="block w-full max-w-xs mx-auto bg-green-700 hover:bg-green-200 text-white hover:text-gray-700focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        // className="w-full bg-green-700 hover:bg-green-200 text-white hover:text-gray-700 font-bold py-2 px-4 mb-6 rounded"
                                    >
                                        REGISTER NOW
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
