import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ onSubmit }) => {
  const location = useLocation();

  const handleRefresh = () => {
    // Reload the page
    window.location.reload();

    // Change the location after reload
    window.location.href = "/";
  };

  if (location.pathname === "/form") {
    return (
      <button
        style={{ display: "none" }}
        className='w-[350px] md:w-[650px] text-center font-bold bg-blue-400 py-2 rounded-sm'
        onClick={onSubmit}
      >
        Submit
      </button>
    );
  }
  if (location.pathname === "/thankyou") {
    return (
      <button
        className='w-[350px] md:w-[650px] text-center font-bold bg-blue-400 py-2 rounded-sm'
        onClick={handleRefresh}
      >
        Start Over
      </button>
    );
  } else {
    return (
      <button className='w-[350px] md:w-[650px] text-center font-bold bg-blue-400 py-2 rounded-sm'>
        Continue
      </button>
    );
  }
};

Button.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Button;
