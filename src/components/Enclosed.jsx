import { useState } from "react";
import Select from "./Select";
import SidePanel from "./SidePanel";
import { Data } from "./Data";
import { Routes, Route } from "react-router-dom";
import Bookings from "./Bookings";
import Form from "./Form";
import Checkout from "./Checkout";
import PropTypes from "prop-types";
import Thankyou from "./Thankyou";
import { useLocation } from "react-router-dom";

export const Enclosed = ({ sendingEmail }) => {
  // console.log(...Data);
  const [data, setData] = useState("");

  const location = useLocation();

  // Extract data where isChecked is true
  const checkedData = Data.filter((item) => {
    return item.dropdown.some((option) => option.isChecked);
  }).map((item) => {
    return {
      name: item.name,
      dropdown: item.dropdown.filter((option) => option.isChecked),
    };
  });

  // console.log(checkedData);

  const handleChangeValue = (value) => {
    setData(value);
    // console.log(value);
  };
  const [selectedDate, setSelectDate] = useState(" ");
  const [selectedTime, setSelectTime] = useState("");

  let checkedTime = [];

  if (Array.isArray(selectedTime)) {
    const checkingTime = selectedTime.filter((item) => item.isChecked);
    checkedTime = ` ${checkingTime[0].time}:${
      checkingTime[0].sec === null ? "00" : checkingTime[0].sec
    }${checkingTime[0].merid}`;
  }

  const recieveDataFrom = (data1, data2) => {
    setSelectDate(data1);
    setSelectTime(data2);

    sendingEmail(data2);
  };

  // console.log(selectedDate, checkedTime);

  const selectedData = checkedData.map((select) => {
    // console.log(select.dropdown[0]);
    return select.name;
  });

  // console.log(JSON.stringify(selectedData));
  const figures = [selectedDate, checkedTime, ...selectedData];

  const sendEmail = () => {
    // console.log("Enclosed success");
    sendingEmail();
  };

  return (
    <div>
      <div className='md:flex md:h-[80vh] w-full justify-center md:mt-4 fixed left-0  right-0 h-[80vh'>
        {/* for Small Screens */}
        {location.pathname !== "/thankyou" && (
          <div className='md:hidden w-full'>
            <SidePanel
              sharedValue={data}
              selectedTime={checkedTime}
              selectedDate={selectedDate}
            />
          </div>
        )}

        <Routes>
          <Route path='/' element={<Select onChange={handleChangeValue} />} />
          <Route
            path='/bookings'
            element={
              <Bookings
                onChange={handleChangeValue}
                sendDataTo={recieveDataFrom}
              />
            }
          />
          <Route
            path='/form'
            element={<Form value={figures} onSubmit={sendEmail} />}
          />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/thankyou' element={<Thankyou />} />
        </Routes>

        {location.pathname !== "/thankyou" && (
          <div className='hidden md:block'>
            <SidePanel
              sharedValue={data}
              selectedTime={checkedTime}
              selectedDate={selectedDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Enclosed.propTypes = {
  sendingEmail: PropTypes.func.isRequired,
};
