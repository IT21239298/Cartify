import React, { useState, Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../auth/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg"
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

function PrimaryHeader() {

    const dispatch = useDispatch();
    const userInfoString = useSelector((state) => state.auth.userInfo);
    const navigate = useNavigate();

    // Check if userInfoString is a JSON string and parse it
    const userInfo =
        typeof userInfoString === "string"
            ? JSON.parse(userInfoString)
            : userInfoString || {};

    const handleLogout = () => {
        // Dispatch the logout action
        dispatch(logout());
        navigate("/");
        // Refresh the window after logout
        window.location.reload();
    };



    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                <a href="/">
                    <img src={logo} alt="Logo" className="w-32" />
                </a>

                <div className="w-full max-w-xl relative flex">
                    <span className="absolute left-4 top-3 text-lg text-gray-400">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" name="search" id="search"
                        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none hidden md:flex"
                        placeholder="search" />
                    <button
                        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition hidden md:flex">Search</button>
                </div>

                <div className="flex items-center space-x-4">

                    <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-solid fa-bag-shopping" />
                        </div>
                        <div className="text-xs leading-3">Cart</div>
                        <div
                            className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            2</div>
                    </a>

                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="">
                                <div className="">
                                    {userInfo.image ? (
                                        <img
                                            src={userInfo.image}
                                            className="h-full w-full"
                                            alt="getimg"
                                        />
                                    ) : (
                                        <div href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                                            <div className="text-2xl">
                                                <i className="fa-regular fa-user"></i>
                                            </div>
                                            <div className="text-xs leading-3">Account</div>
                                        </div>
                                    )}

                                </div>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {Object.keys(userInfo).length > 0 ? (
                                        <>
                                            <h1 className="text-center">
                                                {Object.keys(userInfo).length > 0 && userInfo.firstName}
                                            </h1>
                                            <h1 className="text-center">
                                                {Object.keys(userInfo).length > 0 && userInfo.roles}
                                            </h1>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={handleLogout}
                                                        type="submit"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700",
                                                            "block w-full px-4 py-2  text-sm text-center"
                                                        )}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/login"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700",
                                                            "block px-4 py-2 text-sm text-center"
                                                        )}
                                                    >
                                                        Login
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/register"
                                                        className={classNames(
                                                            active
                                                                ? "bg-gray-100 text-gray-900"
                                                                : "text-gray-700",
                                                            "block px-4 py-2 text-sm text-center"
                                                        )}
                                                    >
                                                        Register
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </>
                                    )}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    {/* <a href="#" className="text-center text-gray-700 hover:text-primary transition relative">
                        <div className="text-2xl">
                            <i className="fa-regular fa-user"></i>
                        </div>
                        <div className="text-xs leading-3">Account</div>
                    </a> */}
                </div>
            </div>
        </header>
    )
}

export default PrimaryHeader
