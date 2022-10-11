import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddActivity() {
    const [activityData, setActivityData] = useState({
        name: "",
        description: "",
        start_date: "",
        end_date: "",
        inCharge: "",
        status: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(activityData);
    };
    return (
        <>
            {/* back to roles */}
            <Link className="m-16 p-4 rounded bg-blue-600" to="/events">
                Back to events
            </Link>
            <div className="flex py-8 bg-green-700">
                <div className="w-full max-w-xs m-auto bg-green-100 rounded p-5">
                    {/* <login-header> */}
                    <h1 className="font-bold text-3xl text-center text-gray-900">
                        Add Activity
                    </h1>
                    <img
                        className="w-20 mx-auto mb-5"
                        src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                    />
                    {/* {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>} */}
                    <form className="w-full" onSubmit={handleSubmit}>
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
                                        setActivityData({
                                            ...activityData,
                                            name: e.target.value,
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
                                Leader
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="userIncharge"
                                    value={activityData.inCharge}
                                    required
                                    // value={loginData.password}
                                    onChange={(e) =>
                                        setActivityData({
                                            ...activityData,
                                            inCharge: e.target.value,
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
                                Leader
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="userIncharge"
                                    value={activityData.inCharge}
                                    required
                                    // value={loginData.password}
                                    onChange={(e) =>
                                        setActivityData({
                                            ...activityData,
                                            inCharge: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 mb-5">
                            <label
                                htmlFor=""
                                className="text-xs font-semibold px-1"
                            >
                                Start Date
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                    *
                                </div>
                                <input
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                    name="start_date"
                                    value={activityData.start_date}
                                    onChange={(e) => {
                                        setActivityData({
                                            ...activityData,
                                            start_date: e.target.value,
                                        });
                                    }}
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="Liaison"
                                />
                            </div>
                        </div>
                        <div className="w-full px-3 mb-5">
                            <label
                                htmlFor=""
                                className="text-xs font-semibold px-1"
                            >
                                Lead Date
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                    *
                                </div>
                                <input
                                    type="date"
                                    min={new Date().toISOString().split("T")[0]}
                                    required
                                    name="start_date"
                                    value={activityData.start_date}
                                    onChange={(e) => {
                                        setActivityData({
                                            ...activityData,
                                            start_date: e.target.value,
                                        });
                                    }}
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="Liaison"
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
                </div>
            </div>
        </>
    );
}

export default AddActivity;
