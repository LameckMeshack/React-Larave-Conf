import React from "react";

function Trial() {
    return (
        <>
            <div className="flex h-screen bg-green-700">
                <div className="w-full max-w-xs m-auto bg-green-100 rounded p-5">
                    {/* <login-header> */}
                    <h1 className="font-bold text-3xl text-center text-gray-900">
                        Add Department
                    </h1>
                    {/* <img
                    className="w-20 mx-auto mb-5"
                    src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                /> */}
                    <form className="w-full">
                        <div className=" w-full   mb-5">
                            <label
                                htmlFor=""
                                className="text-xs font-semibold px-1"
                            >
                                New Department
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input
                                    type="text"
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

export default Trial;
