import { useReducer } from "react";
import carsReducer from "../reducers/carsReducer";
import CarsContext from "./CarsContext";

const CarsContextProvider = ({ children }) => {
  const [cars, dispatch] = useReducer(carsReducer, []);

  return (
    <CarsContext.Provider value={{ cars, dispatch }}>
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContextProvider;
