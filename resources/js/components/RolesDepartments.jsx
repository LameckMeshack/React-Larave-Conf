import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDepartments } from "../Store/Actions/DepartmentAction";
import { getRoles } from "../Store/Actions/RoleActions";

function RolesDepartments() {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.roles);
    const departments = useSelector((state) => state.departments);

    const { loading, error, roles: roleList } = roles;
    const {
        loading: loadingDepartments,
        error: errorDepartments,
        departments: departmentList,
    } = departments;

    useEffect(() => {
        dispatch(getRoles());
        dispatch(getDepartments());
    }, [dispatch]);

    return (
        <div className="roles flex p-8 justify-center align-center">
            <div className="flex flex-col justify-center mx-8">
                <h1 className="text-3xl">Roles</h1>
                <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-2xl">
                        Available Roles
                    </li>
                    {roleList &&
                        roleList.map((role) => (
                            <li
                                key={role.id}
                                className="px-6 py-2 border-b border-gray-200 w-full"
                            >
                                {role.name}
                            </li>
                        ))}
                    <li className="px-6 py-2 border-b border-blue-700 w-full rounded-t-lg">
                        <Link to="/admin/role">
                            <button className="bg-blue-500 rounded p-2">
                                Create Role
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col justify-center">
                <h1 className="text-3xl">Departments</h1>
                <ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
                    <li className="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg text-2xl">
                        Available Department
                    </li>
                    {departmentList &&
                        departmentList.map((dept) => (
                            <li
                                key={dept.id}
                                className="px-6 py-2 border-b border-gray-200 w-full"
                            >
                                {dept.name}
                            </li>
                        ))}
                    <li className="px-6 py-2 border-b border-blue-700 w-full rounded-t-lg">
                        <Link to="/admin/department">
                            <button className="bg-blue-500 rounded p-2">
                                Create Depertment
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RolesDepartments;
