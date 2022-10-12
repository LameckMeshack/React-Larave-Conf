import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createDepartment } from "../Store/Actions/DepartmentAction";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";

function AddDepartment() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

    const deptCreate = useSelector((state) => state.departmentCreate);
    const { loading, error, success } = deptCreate;

    const handleSubmit = (e) => {
        e.preventDefault();
        // if department is empty alert
        if (name === "") {
            alert("Please enter a department");
        } else {
            dispatch(createDepartment(name));

            setName("");
        }
    };
    console.log(name);
    return (
        <>
            <Link
                className="m-16 p-4 rounded bg-blue-600"
                to="/roles/departments"
            >
                Back to departments
            </Link>
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
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    {success && (
                        <MessageBox variant="success">
                            Department Created Successfully
                        </MessageBox>
                    )}
                    <form className="w-full" onSubmit={handleSubmit}>
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
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
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

export default AddDepartment;
