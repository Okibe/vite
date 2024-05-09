import { useState } from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

import Calendar from "./Calendar";

const Bookings = ({ sendDataTo }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs().add(2, "day"));

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();

  const daysInMonth = dayjs().daysInMonth();

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthNames = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [selectedTime, setSelectedTime] = useState([
    { id: 0, time: 8, sec: null, isChecked: false, merid: "am" },
    { id: 1, time: 8, sec: 30, isChecked: false, merid: "am" },
    { id: 2, time: 9, sec: null, isChecked: false, merid: "am" },
    { id: 3, time: 9, sec: 30, isChecked: false, merid: "am" },
    { id: 4, time: 10, sec: null, isChecked: false, merid: "am" },
    { id: 5, time: 10, sec: 30, isChecked: false, merid: "am" },
    { id: 6, time: 11, sec: null, isChecked: false, merid: "am" },
    { id: 7, time: 11, sec: 30, isChecked: false, merid: "am" },

    { id: 8, time: 12, sec: null, isChecked: false, merid: "pm" },
    { id: 9, time: 12, sec: 30, isChecked: false, merid: "pm" },
    { id: 10, time: 1, sec: null, isChecked: false, merid: "pm" },
    { id: 11, time: 1, sec: 30, isChecked: false, merid: "pm" },
    { id: 12, time: 2, sec: null, isChecked: false, merid: "pm" },
    { id: 13, time: 2, sec: 30, isChecked: false, merid: "pm" },
    { id: 14, time: 3, sec: null, isChecked: false, merid: "pm" },
    { id: 15, time: 3, sec: 30, isChecked: false, merid: "pm" },
    { id: 16, time: 4, sec: null, isChecked: false, merid: "pm" },
    { id: 17, time: 4, sec: 30, isChecked: false, merid: "pm" },
    { id: 18, time: 5, sec: null, isChecked: false, merid: "pm" },
    { id: 19, time: 5, sec: 30, isChecked: false, merid: "pm" },
    { id: 20, time: 6, sec: null, isChecked: false, merid: "pm" },
    { id: 21, time: 6, sec: 30, isChecked: false, merid: "pm" },
  ]);

  const morning = selectedTime.filter((item) => item.merid === "am");
  const afternoon = selectedTime.filter((item) => item.merid === "pm");

  const daysTo = () => {
    if (
      currentMonth === selectedDate.month() &&
      currentDay < selectedDate.date()
    ) {
      return selectedDate.date() - currentDay;
    }
    if (selectedDate.month() > currentMonth) {
      return daysInMonth - currentDay + selectedDate.date();
    }
    if (currentDay > selectedDate.date()) {
      return "select appropiate";
    }
  };

  const updatedDate = () => {
    return [
      dayNames[selectedDate.day()],
      selectedDate.date(),
      monthNames[selectedDate.month()],
      selectedDate.year(),
    ];
  };

  const onCheckhandler = (index) => {
    const updatedMorning = selectedTime.map((item, i) => ({
      ...item,
      isChecked: i === index ? true : false,
    }));

    setSelectedTime(updatedMorning);

    sendDataTo(updatedDate, updatedMorning);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='md:w-[400px] overflow-auto md:h-full h-[65vh] pb-10'>
      <Calendar onSelectDate={handleSelectDate} />
      <div className='border rounded m-4 py-2 px-4 flex'>
        <i className='uil uil-clock mx-2'></i>
        <div>
          <div className='font-bold'>
            Select Time for, {dayNames[selectedDate.day()].substring(0, 3)},{" "}
            {selectedDate.date()}{" "}
            {monthNames[selectedDate.month()].substring(0, 3)}
          </div>

          <p>in {daysTo()}days</p>
        </div>
      </div>

      <div className='flex m-4'>
        <div className='w-1/2'>
          <h2 className='font-bold'>Morning</h2>
          <div className=''>
            <ul>
              {morning.map((select) => (
                <li key={select.id} className='flex'>
                  <input
                    key={select.id}
                    type='radio'
                    checked={select.isChecked}
                    onChange={() => onCheckhandler(select.id)}
                  />
                  <p className='pl-2 my-1'>
                    {select.time} :{select.sec === null ? `00` : select.sec}am
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='w-1/2'>
          <h2 className='font-bold'>Afternoon</h2>
          <div className=''>
            <ul>
              {afternoon.map((select) => (
                <li key={select.id} className='flex'>
                  <input
                    key={select.id}
                    type='radio'
                    checked={select.isChecked}
                    onChange={() => onCheckhandler(select.id)}
                  />
                  <p className='pl-2 my-1'>
                    {select.time} :{select.sec === null ? `00` : select.sec}pm
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Bookings.propTypes = {
  sendDataTo: PropTypes.func.isRequired,
};

export default Bookings;
