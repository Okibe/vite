import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";

const Calendar = ({ onSelectDate }) => {
  const [selectDate, setSelectDate] = useState("");

  // useEffect with empty dependency array runs only once after the initial render
  useEffect(() => {
    // Set the selectDate state when the component is initially rendered
    setSelectDate(dayjs().add(2, "day"));
  }, []);

  const handleDateChange = (date) => {
    setSelectDate(date);

    onSelectDate(date);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        onChange={handleDateChange}
        format='dd/MM/yyyy'
        value={selectDate}
      />
    </LocalizationProvider>
  );
};

Calendar.propTypes = {
  onSelectDate: PropTypes.func.isRequired,
};

export default Calendar;
