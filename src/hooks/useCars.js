import { useCallback, useContext } from "react";
import CarsContext from "../store/contexts/CarsContext";
import {
  filterCarsAction,
  loadCarsAction,
} from "../store/actions/actionCreators";
import axios from "axios";
import {
  getDeprecationValues,
  getVenalValue,
} from "../assets/valuesCalculations";

const useCars = () => {
  const { cars, dispatch } = useContext(CarsContext);

  const getCarsValue = useCallback((car) => {
    let updatedCar;
    updatedCar = getVenalValue(car);
    updatedCar = getDeprecationValues(updatedCar);
    return updatedCar;
  }, []);

  const loadCars = useCallback(
    (url) => {
      (async () => {
        const response = await axios.get(url);
        const {
          data: { cars },
        } = response;

        const carsList = [...cars.map((car) => getCarsValue(car))];

        dispatch(loadCarsAction(carsList));
      })();
    },
    [dispatch, getCarsValue]
  );

  const filterCars = (filter) => {
    dispatch(filterCarsAction(filter));
  };

  return {
    cars,
    loadCars,
    filterCars,
  };
};

export default useCars;
