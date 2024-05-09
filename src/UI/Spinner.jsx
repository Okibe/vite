import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='opacity-0.1 h-[100vh] relative'>
      <span className='loader mx-auto my-auto absolute inset-0'></span>
    </div>
  );
};

export default Spinner;
