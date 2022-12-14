import axios from "axios";
import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { getActivities } from "../Store/Actions/ActivityAction";
import { getCategories } from "../Store/Actions/CategoryActions";
import { getDepartments } from "../Store/Actions/DepartmentAction";
import { createEvent } from "../Store/Actions/EventAction";
import { getFrequencies } from "../Store/Actions/FrequencyAction";
import { getRoles } from "../Store/Actions/RoleActions";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";

function AddEvent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.userInfo.userInfo);
    const { user } = userInfo;

    const create = useSelector((state) => state.eventCreate);
    const {
        loading: loadingCreate,
        error: errorCreate,
        success,
        event: eventCreated,
    } = create;

    const [eventDetails, setEventDetails] = useState({
        name: "",
        venue: "",
        created_by: user.id,
        description: "",
        start_date: "",
        lead_date: "",
        department_id: "",
        // activity_id: "",
        category_id: "",
        activity_id: "",
        poster: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(eventDetails);
        if (
            eventDetails.name === "" ||
            eventDetails.venue === "" ||
            eventDetails.created_by === "" ||
            eventDetails.description === "" ||
            eventDetails.start_date === "" ||
            eventDetails.lead_date === "" ||
            eventDetails.department === "" ||
            eventDetails.category === "" ||
            // eventDetails.activities === "" ||
            eventDetails.poster === null
        ) {
            alert("Please fill all the fields");
        } else {
            const formData = new FormData();
            formData.append("name", eventDetails.name);
            formData.append("venue", eventDetails.venue);
            formData.append("created_by", eventDetails.created_by);
            formData.append("description", eventDetails.description);
            formData.append("start_date", eventDetails.start_date);
            formData.append("lead_date", eventDetails.lead_date);
            formData.append("department_id", eventDetails.department_id);
            formData.append("category_id", eventDetails.category_id);
            // formData.append("activity_id", eventDetails.activity_id);
            formData.append("frequency_id", eventDetails.frequency_id);
            formData.append("poster", eventDetails.poster);

            // dispatch(createEvent(eventDetails));
            dispatch(createEvent(formData));
            //  navigate()

            resetForm();
        }
        // console.log("eventCreated", eventCreated);
    };
    const event = useSelector((state) => state.eventCreate);
    const { loading, error, eventInfo } = event;

    const activities = useSelector((state) => state.activityList);
    const { activities: activityList } = activities;

    const categoryList = useSelector((state) => state.categoryList);
    const { categories } = categoryList;

    const frequencyList = useSelector((state) => state.frequencyList);
    const { frequencies } = frequencyList;

    const departments = useSelector((state) => state.departments);
    const { departments: departmentList } = departments;

    const resetForm = () =>
        setEventDetails({
            name: "",
            venue: "",
            created_by: "4",
            description: "",
            start_date: "",
            lead_date: "",
            // activities: "",
            department: "",
            category: "",
            poster: "",
        });

    useEffect(() => {
        if (eventCreated) {
            navigate(`/events/${eventCreated.id}`);
        }
    }, [eventCreated]);

    useLayoutEffect(() => {
        dispatch(getRoles());
        dispatch(getDepartments());
        dispatch(getActivities());
        dispatch(getFrequencies());
        dispatch(getCategories());
    }, [eventInfo]);
    // console.log(departments.departments);

    return (
        <div className="min-w-screen min-h-screen bg-green-700 flex items-center justify-center px-5 py-5">
            <div
                className="bg-green-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
                style={{ maxWidth: "1000px" }}
            >
                <div className="w-full">
                    <div className="w-full py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <img
                                className="w-20 mx-auto mb-5"
                                src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                            />
                            <h1 className="font-bold text-3xl text-gray-900">
                                ADD EVENT
                            </h1>
                            {success && (
                                <MessageBox variant="success">
                                    Event Created Successfully
                                </MessageBox>
                            )}
                        </div>
                        {/* {loading && <LoadingBox></LoadingBox>} */}
                        {error && (
                            <MessageBox variant="danger">{error}</MessageBox>
                        )}
                        <form>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor=""
                                        className="text-xs font-semibold px-1"
                                    >
                                        Event Name
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                            *
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            name="name"
                                            value={eventDetails.name}
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Liaison"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Venue
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                            *
                                        </div>
                                        <input
                                            type="text"
                                            required
                                            name="venue"
                                            value={eventDetails.venue}
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="chancery"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    venue: e.target.value,
                                                })
                                            }
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
                                        Start Date
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                            *
                                        </div>
                                        <input
                                            type="date"
                                            min={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                            required
                                            name="start_date"
                                            value={eventDetails.start_date}
                                            onChange={(e) => {
                                                setEventDetails({
                                                    ...eventDetails,
                                                    start_date: e.target.value,
                                                });
                                            }}
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Liaison"
                                        />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
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
                                            // minimum date to be today
                                            min={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                            required
                                            name="lead_date"
                                            value={eventDetails.lead_date}
                                            onChange={(e) => {
                                                setEventDetails({
                                                    ...eventDetails,
                                                    lead_date: e.target.value,
                                                });
                                            }}
                                            required
                                            max={eventDetails.start_date}
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="confirm password"
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
                                        Department
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    department_id:
                                                        e.target.value,
                                                })
                                            }
                                        >
                                            <option className="text-gray-700">
                                                Select Department
                                            </option>
                                            {departmentList &&
                                                departmentList.length > 0 &&
                                                departmentList.map((dept) => (
                                                    <option
                                                        key={dept.id}
                                                        value={dept.id}
                                                    >
                                                        {dept.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>

                                {/* <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor=""
                                        className="text-xs font-semibold px-1"
                                    >
                                        Activities
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    activity_id: e.target.value,
                                                })
                                            }
                                        >
                                            <option className="text-gray-700">
                                                Select Activities
                                            </option>
                                            {activityList &&
                                                activityList.length > 0 &&
                                                activityList.map((act) => (
                                                    <option
                                                        value={act.id}
                                                        key={act.id}
                                                    >
                                                        {act.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div> */}
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Category
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            value={eventDetails.category_id}
                                            name="category"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    category_id: e.target.value,
                                                })
                                            }
                                        >
                                            <option className="text-gray-700">
                                                Select Category
                                            </option>
                                            {categories &&
                                                categories.length > 0 &&
                                                categories.map((cat) => (
                                                    <option
                                                        key={cat.id}
                                                        value={cat.id}
                                                    >
                                                        {cat.name}
                                                    </option>
                                                ))}
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
                                        Description
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                            *
                                        </div>
                                        <textarea
                                            type="tel"
                                            required
                                            name="description"
                                            value={eventDetails.description}
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    description: e.target.value,
                                                })
                                            }
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Please enter the description of the project"
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="w-1/4 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Frequency
                                    </label>
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            value={eventDetails.frequency_id}
                                            name="activities"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    frequency_id:
                                                        e.target.value,
                                                })
                                            }
                                        >
                                            <option className="text-gray-700">
                                                Select Frequency
                                            </option>
                                            {frequencies &&
                                                frequencies.length > 0 &&
                                                frequencies.map((freq) => (
                                                    <option
                                                        key={freq.id}
                                                        value={freq.id}
                                                    >
                                                        {freq.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="w-1/4 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Poster
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-red-800 text-center pointer-events-none flex items-center justify-center">
                                            *
                                        </div>
                                        <input
                                            type="file"
                                            required
                                            name="poster"
                                            // value={eventDetails.poster}
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    poster: e.target.files[0],
                                                })
                                            }
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
                                        onClick={handleSubmit}
                                    >
                                        ADD EVENT
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

export default AddEvent;
