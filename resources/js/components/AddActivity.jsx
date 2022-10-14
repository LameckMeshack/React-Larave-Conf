import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createActivity } from "../Store/Actions/ActivityAction";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";

function AddActivity() {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //get event id from local storage
    const id = localStorage.getItem("event_id");
    //generate random id between 1 and 3
    const random = Math.floor(Math.random() * 3) + 1;

    const [activityData, setActivityData] = useState({
        name: "",
        incharge: "",
        start_date: "",
        status_id: random,
        received: false,
        event_id: id,
    });

    const getUsers = async () => {
        axios.get("/api/users").then((res) => {
            setUsers(res.data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(activityData);
        dispatch(createActivity(activityData));
        // reset activity
        setActivityData({
            name: "",
            incharge: "",
            start_date: "",
            status_id: "1",
            received: false,
            event_id: id,
        });
    };

    const create = useSelector((state) => state.activityCreate);
    const { loading, error, success, activity } = create;
    useEffect(() => {
        getUsers();
    }, []);
    console.log(users);
    return (
        <>
            {/* back to roles */}
            <Link className="m-16 p-4 rounded bg-blue-600">
                <button onClick={() => navigate(-1)}>Go Back</button>
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
                    {loading && <LoadingBox></LoadingBox>}
                    {error && (
                        <MessageBox variant="danger">{error}</MessageBox>
                    )}{" "}
                    {success && (
                        <MessageBox variant="success">
                            Activity Created Successfully
                        </MessageBox>
                    )}
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className=" w-full   mb-5">
                            <label
                                htmlFor=""
                                className="text-xs font-semibold px-1"
                            >
                                Activity Name
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input
                                    type="text"
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                    placeholder="Liaison"
                                    required
                                    value={activityData.name}
                                    onChange={(e) =>
                                        setActivityData({
                                            ...activityData,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>
                        <div className=" px-3 mb-5">
                            <label
                                htmlFor="Email"
                                className="text-xs font-semibold px-1"
                            >
                                Leader
                            </label>
                            {/* select box */}
                            <div className="relative">
                                <select
                                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                    value={activityData.incharge}
                                    onChange={(e) =>
                                        setActivityData({
                                            ...activityData,
                                            incharge: e.target.value,
                                        })
                                    }
                                >
                                    <option className="text-gray-700">
                                        Select activity Leader
                                    </option>

                                    {users &&
                                        users.map((user) => (
                                            <option
                                                value={user.id}
                                                key={user.id}
                                            >
                                                {user.name}
                                            </option>
                                        ))}
                                </select>
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
