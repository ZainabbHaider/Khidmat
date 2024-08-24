"use client";
import React from "react";
import { Link } from "react-router-dom";
import blank from "../../assets/logo.jpeg";

const Navbar = () => {

  return (
    <nav class=" bg-background border-gray-200 dark:bg-darkbackground">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
        <a href="/" class="flex items-center">
          <img src={blank} class="h-20 mr-5 rounded-full" alt="BIF Logo" />
          <span class="text-text text-3xl font-roboto font-bold whitespace-nowrap dark:text-darktext">
            DASTIGEERI FOUNDATION
          </span>
        </a>

        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 ml-20"
          id="navbar-language"
        >
          <ul className="flex flex-col font-roboto p-4 md:p-0 mt-4 border rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-background dark:bg-gray-800 md:dark:bg-darkbackground dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-text rounded md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-darktext md:dark:hover:text-darkprimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg md:text-xl"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="block py-2 pl-3 pr-4 text-text rounded md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-darktext md:dark:hover:text-darkprimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg md:text-xl"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="block py-2 pl-3 pr-4 text-text rounded md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-darktext md:dark:hover:text-darkprimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg md:text-xl"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="/team"
                className="block py-2 pl-3 pr-4 text-text rounded md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-darktext md:dark:hover:text-darkprimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg md:text-xl"
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/donate"
                className="block py-2 pl-3 pr-4 text-text rounded md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-darktext md:dark:hover:text-darkprimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-lg md:text-xl"
              >
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
