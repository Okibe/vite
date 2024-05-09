// import { useRef } from "react";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import { Enclosed } from "./components/Enclosed";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Data } from "./components/Data";
import { useState, useEffect } from "react";
import Spinner from "./UI/Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const location = useLocation();

  const [timeData, setTimeData] = useState([]);

  const anyChecked = Data.some((category) => {
    return category.dropdown.some((item) => item.isChecked === true);
  });

  const anyCheckedTime = timeData.some((category) => {
    return category.isChecked === true;
  });

  const link = () => {
    if (location.pathname === "/" && anyChecked) {
      return "bookings";
    }
    if (location.pathname === "/bookings" && anyCheckedTime) {
      return "/form";
    }
    if (location.pathname === "/form") {
      return "/checkout";
    }
    if (location.pathname === "/checkout") {
      return "/thankyou";
    }
  };

  // const form = useRef();

  const handleSubmit = (e) => {
    // Setting time to verify the button
    setTimeData(e);
  };

  const toValue = link();

  return (
    <>
      <NavBar className='overflow-y-hidden' />
      {isLoading ? <Spinner /> : " "}
      <div className='flex  relative'>
        <div className='flex md:h-[80%] w-full justify-center md:mt-4 fixed left-0  right-0'>
          <Enclosed sendingEmail={handleSubmit} />
        </div>

        <div className='my-8 md:mx-4 justify-center  flex items-center  w-full fixed bottom-0 sm:my-4'>
          <Link to={toValue}>
            <Button onSubmit={handleSubmit} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
