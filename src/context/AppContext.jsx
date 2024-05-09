// import { createContext } from "react";

// export const SelectContext = createContext();

// // // Custom hook to consume the context
// // export const useData = () => useContext(SelectContext);

// DataContext.js
import { createContext } from "react";

export const DataContext = createContext();

// export const DataProvider = ( children ) => {
//   const [data, setData] = useState([...Data]);

//   return (
//     <DataContext.Provider value={{ data, setData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useData = () => useContext(DataContext);
