import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Form = (props) => {
  const [formData, setFormData] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const form = useRef(); // ref is  equatting   the  form

  const navigateTo = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_cearnih", "template_lnnwoo6", form.current, {
      publicKey: "zBqgPnkUy7aOWnRNF",
    });

    // console.log("Form submitted");
    e.target.reset();
    navigateTo("/checkout");
  };

  return (
    <div className='md:w-[400px] overflow-auto md:h-full h-[65vh] pb-12 relative'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='mt-5 mx-2 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>
          <div className='sm:col-span-3'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              First name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='firstName'
                onChange={onChangeHandler}
                value={formData.firstName}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Last name
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='lastName'
                onChange={onChangeHandler}
                value={formData.lastName}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-6'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                name='email'
                type='email'
                onChange={onChangeHandler}
                value={formData.email}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Mobile Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='mobileNumber'
                onChange={onChangeHandler}
                value={formData.mobileNumber}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-3'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Other Number
            </label>
            <div className='mt-2'>
              <input
                type='text'
                name='otherNumber'
                onChange={onChangeHandler}
                value={formData.otherNumber}
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-6'>
            <label className='block text-sm font-medium leading-6 text-gray-900'>
              Company Name (optional)
            </label>
            <div className='mt-2'>
              <input
                onChange={onChangeHandler}
                value={formData.companyName}
                name='companyName'
                type='text'
                placeholder='Company'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-6'>
            <div className='mt-2'>
              <textarea
                name='comment'
                type='text'
                placeholder='Comments(optional)'
                onChange={onChangeHandler}
                value={formData.comment}
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-6'>
            <div className='mt-2'>
              <textarea
                name='value'
                value={props.value}
                readOnly
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='sm:col-span-6 flex'>
            <input className='ring-gray-600 mx-2' type='checkbox' />
            <p>I agree to Beauty with Sharon </p>
            <p className='mx-2 underline'>privacy policy</p>
          </div>
        </div>

        <div className='bg-slate-100 m-2 rounded px-6 py-4'>
          <h2 className='font-bold text-sm'>Cancellation policy</h2>
          <p className='text-sm font-medium'>
            No cancellations or changes allowed within 24 hours of the
            appointment
          </p>
          <div className='flex'>
            <input className='ring-grayz-600 mr-2' type='checkbox' />
            <p className="text-sm font-medium'"> I agree</p>
          </div>
        </div>

        <div className='my-8 mx-auto justify-center items-center flex  w-full fixed bottom-0 sm:my-4 md:block'>
          <button
            type='submit'
            className='w-[350px] md:w-[650px] text-center font-bold bg-blue-400 py-2 rounded-sm mx-auto'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};


Form.propTypes = {
  value: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
