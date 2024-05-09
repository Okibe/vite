import { useState } from "react";
import { Data } from "./Data";
import PropTypes from "prop-types";

const Select = (props) => {
  const [selectOpen, setSelectOpen] = useState(Data.map(() => false));
  //   const [arrowDown, setArrowDown] = useState(0);

  const [checkboxes, setCheckboxes] = useState(
    Array.from({ length: Data.length }, () =>
      Array.from({ length: 4 }, () => false)
    )
  );

  const [data, setData] = useState([...Data]);

  // console.log(data);

  const handleClickSelect = (select, i) => {
    // Spread  the  useState current state
    const updateStates = [...selectOpen];

    // Toggle the boolean values vise versa
    updateStates[i] = !updateStates[i];

    setSelectOpen(updateStates);

    // console.log(select);
  };

  const handleChange = (i, j) => {
    // Create a copy of the nested array
    const newArray = [...checkboxes];
    // Update the value at the specified row and column  // Toggle  the state
    newArray[i][j] = !newArray[i][j];
    // Set the state with the updated nested array
    setCheckboxes(newArray);

    // console.log(checkboxes[i][j]);

    const updatedData = [...data];
    updatedData[i].dropdown[j].isChecked =
      !updatedData[i].dropdown[j].isChecked;

    // Update the state with the updated data
    setData(updatedData);
    props.onChange(updatedData);
  };

  // Format the price above to USD using the locale, style, and currency.
  let currencyFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <div className='md:w-[400px] lg:overflow-auto sm:mx-2 sm:overflow-y-scroll sm:w-[200px] md:h-[auto] overflow-y-auto h-[65vh] pb-10 scroll-snap-type-y mandatory '>
      {Data.map((select, i) => (
        <div key={i}>
          <button
            className=' font-bold py-4  px-2 w-full  relative flex'
            onClick={() => handleClickSelect(select, i)}
          >
            <p className='left-0 w-[90%] justify-start flex'>{select.name}</p>
            {
              <i
                className={
                  selectOpen[i]
                    ? "uil uil-angle-down rotate-90"
                    : "uil uil-angle-down"
                }
              ></i>
            }
          </button>

          <div key={i}>
            {selectOpen[i] &&
              select.dropdown.map((array, j) => (
                <ul key={j}>
                  <li className='py-4  px-2 w-full'>
                    <input
                      type='checkbox'
                      id={j}
                      value={array.about}
                      checked={array.isChecked}
                      onChange={() => handleChange(i, j)}
                    />{" "}
                    {array.about} {currencyFormat.format(array.amount)}
                    {array.hour ? ` ${array.hour}hrs` : " "}
                    {array.mins ? ` ${array.mins}mins` : "  "}
                  </li>
                </ul>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// Define prop types for ChildComponent
Select.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Select;
