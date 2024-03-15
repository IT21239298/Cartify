import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../auth/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
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

  console.log("user Information ", userInfo);

  return (
    <header className="fixed shadow-md w-full h-10 px-2 md:px-4 z-50 bg-white ">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {Object.keys(userInfo).length > 0 && (
            <h1 className="text-xl">Welcome, {userInfo.firstName}</h1>
          )}
        </div>
        <div className="logo">
          <Link to={"/"}>CARTIFY</Link>
        </div>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="">
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md mt-2">
              {userInfo.image ? (
                <img
                  src={userInfo.image}
                  className="h-full w-full"
                  alt="getimg"
                />
              ) : (
                <FaUserCircle />
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
      </div>
    </header>
  );
}

export default Header;
