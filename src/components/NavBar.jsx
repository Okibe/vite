// import React from "react";
import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  const navigateTo = useNavigate();

  let header;
  // Setting header with routes
  if (location.pathname === "/") {
    header = "Select service";
  }
  if (location.pathname === "/bookings") {
    header = "Day and time";
  }
  if (location.pathname === "/form") {
    header = "Enter your details";
  }
  if (location.pathname === "/checkout") {
    header = "Almost there!";
  }
  if (location.pathname === "/thankyou") {
    header = "Thank You!";
  }

  const goBack = useCallback(() => {
    if (location.pathname === "/bookings") {
      navigateTo("/");
    }
    if (location.pathname === "/form") {
      navigateTo("/bookings");
    }
    if (location.pathname === "/checkout") {
      navigateTo("/form");
    }
  }, [navigateTo, location.pathname]);

  return (
    <nav className=' border-b-2 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex '>
      <div className='w-1/4'>
        <div className='my-4'>
          {location.pathname !== "/" && location.pathname !== "/thankyou" ? (
            <i
              className='uil uil-angle-left-b  my-4'
              style={{ width: "30px", height: "30px" }}
              onClick={goBack}
            ></i>
          ) : (
            " "
          )}
        </div>
      </div>
      <h1 className='w-2/4 text-xl font-bold my-auto h-10 text-center'>
        {header}
      </h1>
      <div className='my-1 w-1/4 justify-end flex'>
        <button className='px-4 py-2 mx-auto border border-slate-700 rounded hover:bg-slate-700  hover:text-slate-50 hidden'>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
