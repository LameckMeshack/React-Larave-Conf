import React, { useState } from "react";

function AddEvent() {
    const [eventDetails, setEventDetails] = useState({
        name: "",
        venue: "",
        owner: "",
        description: "",
        startDate: "",
        leadDate: "",
        department: "",
        category: "",
        poster: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eventDetails);
    };

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
                                ADD EVENT
                            </h1>
                            <img
                                className="w-20 mx-auto mb-5"
                                src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                            />
                        </div>
                        <div>
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor=""
                                        className="text-xs font-semibold px-1"
                                    >
                                        Event Name
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
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
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
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
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="date"
                                            min={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                            required
                                            name="startDate"
                                            value={eventDetails.startDate}
                                            onChange={(e) => {
                                                setEventDetails({
                                                    ...eventDetails,
                                                    startDate: e.target.value,
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
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="date"
                                            // minimum date to be today
                                            min={
                                                new Date()
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                            required
                                            name="leadDate"
                                            value={eventDetails.leadDate}
                                            onChange={(e) => {
                                                setEventDetails({
                                                    ...eventDetails,
                                                    leadDate: e.target.value,
                                                });
                                            }}
                                            required
                                            max={eventDetails.startDate}
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
                                                    department: e.target.value,
                                                })
                                            }
                                        >
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
                                        Category
                                    </label>
                                    {/* select box */}
                                    <div className="relative">
                                        <select
                                            className="block appearance-none w-full bg-white border border-gray-400 hover:border-indigo-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                                            value={eventDetails.category}
                                            name="category"
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    category: e.target.value,
                                                })
                                            }
                                        >
                                            <option className="text-gray-700">
                                                Select Category
                                            </option>

                                            <option>Annualy</option>
                                            <option>Requirent</option>
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
                                        Description
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
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
                                <div className="w-1/2 px-3 mb-5">
                                    <label
                                        htmlFor="Email"
                                        className="text-xs font-semibold px-1"
                                    >
                                        Poster
                                    </label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input
                                            type="file"
                                            required
                                            name="poster"
                                            // value={eventDetails.poster}
                                            onChange={(e) =>
                                                setEventDetails({
                                                    ...eventDetails,
                                                    file: e.target.files[0],
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
                                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        onClick={handleSubmit}
                                    >
                                        ADD EVENT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEvent;
