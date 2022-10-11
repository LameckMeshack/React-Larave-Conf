import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Home() {
    const user = useSelector((state) => state.userInfo);

    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                        Login to
                        <span className="dark:text-violet-400"> create</span>
                        Events
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">
                        Welcome to our events management system. Please login to
                        {/* <br className="hidden md:inline lg:hidden"> */}
                        create and schedule events.
                        {/* </br> */}
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        {/* if no user is logged in, show the login button */}
                        {!user ? (
                            <Link
                                rel="noopener noreferrer"
                                to="/login"
                                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
                            >
                                Login
                            </Link>
                        ) : (
                            <Link
                                rel="noopener noreferrer"
                                to="/events"
                                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                            >
                                View Events
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src="assets/svg/Business_SVG.svg"
                        alt=""
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
                    />
                </div>
            </div>
        </section>
    );
}
export default Home;
