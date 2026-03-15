




import React from "react";

const Navbar = () => {
  return (
    <>
      {/* Primary NavBar */}
      <div className="fixed top-0 left-0 w-full h-16 flex items-center z-50">

        <header className=" bg-red-400 h-full flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-navbar-inverse border-b border-navbar-line text-sm py-3 ">

          <nav className="max-w-340 mx-auto w-full flex md:grid md:grid-cols-3 md:gap-x-1 basis-full items-center px-4 sm:px-6 lg:px-8">

            {/* Section 1 */}
            <div className="me-5 ">
              {/* Logo */}
              <a
                className="flex-none rounded-md text-2xl inline-block font-bold focus:outline-hidden focus:opacity-80" href="#" aria-label="E-Bazaar">E-Bazaar</a>
              {/* End Logo */}
            </div>

            {/* Section 2 */}
            <div className="hidden md:block">

              {/* Search Input */}
              <div className="relative">
                <div className="absolute inset-y-0 inset-s-0 flex items-center pointer-events-none z-20 ps-3.5">
                  <svg
                    className="shrink-0 size-4 text-foreground-inverse/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>

                <input
                  type="text"
                  className="py-2 ps-10 pe-16 block w-full bg-transparent border-line-inverse/20 rounded-lg text-sm text-foreground-inverse placeholder:text-foreground-inverse/60 focus:outline-hidden focus:border-line-inverse/30 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Search"
                />

                <div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-foreground-inverse hover:text-primary-hover focus:outline-hidden focus:text-primary-focus"
                    aria-label="Close"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-3 text-foreground-inverse/60">
                  <svg
                    className="shrink-0 size-3 text-foreground-inverse/60"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="mx-1">
                    <svg
                      className="shrink-0 size-3 text-foreground-inverse/60"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </span>
                  <span className="text-xs">/</span>
                </div>
              </div>
              {/* End Search Input */}
            </div>

            {/* Section 3 */}
            <div className="flex-1 flex flex-row justify-end items-center gap-1">

              {/* Notifications */}
              <button
                type="button"
                className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-foreground-inverse hover:bg-plain/10 focus:outline-hidden focus:bg-plain/10 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span className="sr-only">Notifications</span>
              </button>

              {/* Activity */}
              <button
                type="button"
                className="size-9.5 relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-foreground-inverse hover:bg-plain/10 focus:outline-hidden focus:bg-plain/10 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span className="sr-only">Activity</span>
              </button>


              {/* Account */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-dropdown-account"
                  type="button"
                  className="size-9.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-foreground focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <img
                    className="shrink-0 size-9.5 rounded-full"
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                </button>
              </div>


            </div>

          </nav>
        </header>

      </div>



      {/* Second Navbar */}
      <div className="mt-16 bg-red-300 h-10 flex items-center px-6 shadow" >
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-500">Home</li>
          <li className="cursor-pointer hover:text-blue-500">Products</li>
          <li className="cursor-pointer hover:text-blue-500">Cart</li>
          <li className="cursor-pointer hover:text-blue-500">Profile</li>
        </ul>
      </div >
    </>
  );
};

export default Navbar;



