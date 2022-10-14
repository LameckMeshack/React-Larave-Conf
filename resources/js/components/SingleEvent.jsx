import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSingleEvent } from "../Store/Actions/EventAction";

function SingleEvent() {
    const dispatch = useDispatch();
    //get Id from url
    const params = useParams();
    const user = useSelector((state) => state.userInfo);
    const { userInfo } = user;
    // console.log("seee", userInfo?.user?.id);

    useEffect(() => {
        dispatch(getSingleEvent(params.id));
        //set id in the local storage
        localStorage.setItem("event_id", params.id);
    }, []);

    const event = useSelector((state) => state.event);
    // console.log(event);
    const { loading, error, event: singleEvent } = event;
    // console.log(singleEvent);
    const checkRead = () => {};
    return (
        <div className="event  bg-green-100">
            <div className="event-top">
                <div className="event-top-left">
                    <div className="event-image">
                        <img
                            className="event-image"
                            src={`../../uploads/posters/${singleEvent?.poster}`}
                        />
                    </div>
                </div>
                <div className="event-top-right">
                    <h2>{singleEvent?.name}</h2>
                    <br />
                    <p>{singleEvent?.description} </p>
                    <p>
                        <small> Start Date: {singleEvent?.start_date} </small>
                    </p>

                    <p>
                        <small> Lead Date: {singleEvent?.lead_date}</small>
                    </p>
                    <p>
                        <small> {singleEvent?.department?.name}</small>{" "}
                    </p>
                    <p>
                        <small> {singleEvent?.category?.name}</small>{" "}
                    </p>
                    <p>
                        <small> Location: {singleEvent?.venue}</small>{" "}
                    </p>

                    <p>Event Organizer: Rhino</p>
                    <p>Status: Ontime</p>
                </div>
            </div>
            <div className="event-bottom max-w-full ">
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block max-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden">
                                <table className="max-w-full text-center">
                                    <thead className="border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Received
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Activity
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                InCharge
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* //loop through the activities */}

                                        {singleEvent?.activities?.map(
                                            (activity) => (
                                                <tr
                                                    className="border-b border-green-200  hover:bg-green-50"
                                                    key={activity.id}
                                                >
                                                    <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                        {}
                                                        <input
                                                            type="checkbox"
                                                            readOnly
                                                            // onClick={checkRead}
                                                            // {activity?.incharge? === userInfo?.user?.id
                                                            //     ? ''
                                                            //     : 'readOnly'}
                                                            checked={
                                                                activity.received
                                                            }
                                                        />
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {activity?.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {activity?.user?.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {activity?.start_date}
                                                    </td>
                                                    <td
                                                        className={`text-sm text-gray-900 font-extrabold	 px-6 py-4 whitespace-nowrap   ${
                                                            activity?.status
                                                                ?.id === 1
                                                                ? "text-green-800"
                                                                : activity
                                                                      ?.status
                                                                      ?.id === 2
                                                                ? "text-orange-200"
                                                                : "text-red-800"
                                                        }`}
                                                    >
                                                        {activity?.status?.name}
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                                <Link
                                    to="/addactivity"
                                    className="bg-blue-300 p-2 rounded"
                                >
                                    Add Activity
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleEvent;
