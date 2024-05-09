// import { useContext } from "react";

import { Data } from "./Data";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const SidePanel = ({ selectedDate, selectedTime }) => {
  // const value = useContext(AppContext);

  // const newData = props.sharedValue;
  // console.log(newData);

  const location = useLocation();

  // Statement  with routes
  let message;
  if (location.pathname === "/") {
    message = "Come and visit the relaxing Beauty by Sharona.";
  }
  if (location.pathname === "/bookings") {
    message =
      "I only book appointments up to 3 months in advance. Can't see a time that works for you? Reach out to me on 0409 833 544 to see if I can accommodate your time.";
  }
  if (location.pathname === "/form") {
    message =
      "If you don't have a mobile number, enter your home or work number followed by the number type e.g. (Home). If you have any additional requirements, please leave these in the comment field below!";
  }

  // Format the price above to USD using the locale, style, and currency.
  let currencyFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  const anyChecked = Data.some((category) => {
    return category.dropdown.some((item) => item.isChecked === true);
  });

  // console.log(selectedDate, selectedTime);

  return (
    <div className='bg-gray-100  md:w-[250px]  overflow-auto md:h-full h-[150px]'>
      <div className='my-4 mx-3 text-sm'>{message}</div>

      <div className='mx-3 border border-gray-300 rounded p-4  bg-slate-50 mb-2'>
        <div className='flex'>
          <div>
            {anyChecked && location.pathname !== "/checkout" ? (
              <i className='uil uil-shopping-bag'></i>
            ) : (
              " "
            )}
          </div>
          <div>
            {location.pathname !== "/checkout" &&
              Data.map((select, i) => (
                <div key={i}>
                  {select.dropdown.map((array, j) => (
                    <div className='px-2' key={j}>
                      <div className='text-md font-bold'>
                        {array.isChecked ? array.about : " "}
                      </div>
                      <div className='text-sm'>
                        {array.isChecked
                          ? currencyFormat.format(array.amount)
                          : " "}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>

        {location.pathname === "/form" || location.pathname === "/checkout" ? (
          <div className='flex'>
            <i className='uil uil-calender'></i>
            <div className='px-2'>
              <h1 className='text-md font-bold'>
                {selectedDate === undefined
                  ? " "
                  : `${selectedDate[0]}, ${selectedDate[1]}  ${selectedDate[2]}`}
              </h1>
            </div>
          </div>
        ) : (
          ""
        )}

        {location.pathname === "/form" || location.pathname === "/checkout" ? (
          <div className='flex'>
            <i className='uil uil-clock-ten'></i>
            <div className='px-2'>
              <h1 className='text-md font-bold'>{selectedTime}</h1>
            </div>
          </div>
        ) : (
          ""
        )}

        {location.pathname !== "/" ? (
          <div className=' flex'>
            <i className='uil uil-user-md'></i>
            <div className='px-2'>
              <h1 className='text-md font-bold'>Sharon</h1>
            </div>
          </div>
        ) : (
          " "
        )}

        <div className=' flex'>
          <i className='uil uil-map-marker'></i>
          <div className='px-2'>
            <h1 className='text-md font-bold'>Beauty For Sharona</h1>
            <h2> 97 Army modern market</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

SidePanel.propTypes = {
  selectedTime: PropTypes.string.isRequired,
  selectedDate: PropTypes.array.isRequired,
};

export default SidePanel;
