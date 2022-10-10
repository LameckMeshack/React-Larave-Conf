import React from "react";

function SingleEvent() {
    return (
        <div className="event  bg-green-100">
            <div className="event-top">
                <div className="event-top-left">
                    <div className="event-image"></div>
                </div>
                <div className="event-top-right">
                    <h2>The Grand Event</h2>
                    <h3>
                        The Grand Event is a great event that will be held in
                        the Chancery , puzzles
                    </h3>
                    <p>
                        Start Date: <span> 12/12/2020</span>
                    </p>

                    <p>
                        Lead Date: <span> 12/12/2020</span>
                    </p>
                    <p>Department2</p>
                    <p>Category</p>
                    <p>Location: The Chancery</p>

                    <p>Event Organizer: Rhino</p>
                    <p>Status: Ontime</p>
                </div>
            </div>
            <div className="event-bottom">
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full text-center">
                                    <thead class="border-b">
                                        <tr>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Activity
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Coordinator
                                            </th>
                                            <th
                                                scope="col"
                                                class="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Start Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b bg-green-500 border-green-200">
                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Arrangements
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Coordinator 1
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                        <tr class="border-b bg-orange-500 border-red-200">
                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Budgetting
                                            </td>
                                            <td class="text-sm text-gray-500 font-light px-6 py-4 whitespace-nowrap">
                                                Treasurer
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                        <tr class="border-b bg-red-500 border-yellow-200">
                                            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                                                Item Purchasing
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Treasurer
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                12/12/2020
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleEvent;
