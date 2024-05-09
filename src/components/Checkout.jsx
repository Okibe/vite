import { Data } from "./Data";

const Checkout = () => {
  // Format the price above to USD using the locale, style, and currency.
  let currencyFormat = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  // Initialize an empty array to store the amounts
  let amountsArray = [];

  // Loop through the Data array
  Data.forEach((item) => {
    // Loop through dropdown array of each object
    item.dropdown.forEach((option) => {
      // Check if isChecked is true
      if (option.isChecked) {
        // Add the amount to amountsArray if isChecked is true
        amountsArray.push(option.amount);
      }
    });
  });

  const initialValue = 0;

  const sumWithInitial = amountsArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return (
    <div className='md:w-[400px] overflow-auto md:h-full h-[400px]'>
      <div className='mx-2 my-1 bg-slate-200 rounded p-4'>
        <p className='font-bold'>Sharon Owobi</p>
        <p>Opay</p>
        <p>7040294054</p>
      </div>
      <div className='br-1 m-2  rounded px-2 py-4 bg-yellow-100 flex'>
        <i className='uil uil-info-circle mr-2'></i>
        <p className='text-sm'>
          This booking will be held for 10 minutes while payment is made. If
          payment has not been made and &apos; Pay later &apos; hasn&apos;t been
          selected in that time, the booking will be cancelled.
        </p>
      </div>

      <table className='table-auto m-2 w-[94%]'>
        <thead className='border-b-2 border-b-gray-200 text-center'>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {Data.map((select, i) => (
                <div key={i}>
                  {select.dropdown.map((array, j) => (
                    <div className='px-2  text-md font-bold' key={j}>
                      {array.isChecked ? array.about : " "}
                    </div>
                  ))}
                </div>
              ))}
            </td>

            <td>
              {Data.map((select, i) => (
                <div key={i}>
                  {select.dropdown.map((array, j) => (
                    <div className='px-2 text-sm' key={j}>
                      {array.isChecked
                        ? currencyFormat.format(array.amount)
                        : " "}
                    </div>
                  ))}
                </div>
              ))}
            </td>
          </tr>

          <tr>
            <td>Total</td>
            <td>{currencyFormat.format(sumWithInitial)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
