import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createRoleAction } from "../Store/Actions/RoleActions";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";

function AddRoles() {
    const dispatch = useDispatch();
    const [role, setRole] = useState("");

    const roleCreate = useSelector((state) => state.roleCreate);
    const { loading, error, success } = roleCreate;

    const handleSubmit = (e) => {
        e.preventDefault();
        // if role is empty alert
        if (role === "") {
            alert("Please enter a role");
        } else {
            dispatch(createRoleAction(role));
            setRole("");
        }
    };
    return (
        <>
            {/* back to roles */}
            <Link
                className="m-16 p-4 rounded bg-blue-600"
                to="/roles/departments"
            >
                Back to roles
            </Link>
            <div className="flex py-8 bg-green-700">
                <div className="w-full max-w-xs m-auto bg-green-100 rounded p-5">
                    {/* <login-header> */}
                    <h1 className="font-bold text-3xl text-center text-gray-900">
                        Add Roles
                    </h1>
                    <img
                        className="w-20 mx-auto mb-5"
                        src="https://www.cytonn.com/assets/img/logos/cytonn_logo.svg"
                    />
                    {loading && <LoadingBox></LoadingBox>}
                    {error && <MessageBox variant="danger">{error}</MessageBox>}
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className=" w-full   mb-5">
                            <label
                                htmlFor=""
                                className="text-xs font-semibold px-1"
                            >
                                New Roles
                            </label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                <input
                                    type="text"
                                    name="role"
                                    id="role"
                                    required
                                    placeholder="Enter Role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
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

export default AddRoles;
