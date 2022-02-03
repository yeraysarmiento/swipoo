import { useCallback, useContext } from "react";
import CarsContext from "../store/contexts/CarsContext";
import { loadCarsAction } from "../store/actions/actionCreators";
import axios from "axios";

const useCars = () => {
  const { cars, dispatch } = useContext(CarsContext);

  const getDeprecationValues = (car) => {
    let deprecationValues = [];
    let deprecatedValue;
    const carAge = car.age;
    const venalValue = car.venalValue;

    for (let i = 0, index = 0.1; i < carAge + 1; i++, index += 0.1) {
      deprecatedValue = venalValue * (1 - index);
      deprecationValues.push(Math.trunc(deprecatedValue));
      if (deprecationValues.length > 8) {
        break;
      }
    }

    return { ...car, deprecationValues };
  };

  const getVenalValue = (car) => {
    let venalValue;

    const date = new Date();
    const actualYear = date.getFullYear();
    const enrollmentValue = +car.value;
    const enrollmentDate = car.period.includes("--")
      ? +car.period.replace("--", "")
      : +car.period.replace("-", "");
    const carAge = actualYear - enrollmentDate;

    switch (true) {
      case carAge <= 1:
        venalValue = enrollmentValue;
        break;
      case carAge <= 2:
        venalValue = enrollmentValue * 0.84;
        break;
      case carAge <= 3:
        venalValue = enrollmentValue * 0.67;
        break;
      case carAge <= 4:
        venalValue = enrollmentValue * 0.56;
        break;
      case carAge <= 5:
        venalValue = enrollmentValue * 0.57;
        break;
      case carAge <= 6:
        venalValue = enrollmentValue * 0.39;
        break;
      case carAge <= 7:
        venalValue = enrollmentValue * 0.34;
        break;
      case carAge <= 8:
        venalValue = enrollmentValue * 0.28;
        break;
      case carAge <= 9:
        venalValue = enrollmentValue * 0.24;
        break;
      case carAge <= 11:
        venalValue = enrollmentValue * 0.17;
        break;
      case carAge <= 12:
        venalValue = enrollmentValue * 0.13;
        break;
      case carAge > 12:
        venalValue = enrollmentValue * 0.1;
        break;
      default:
        venalValue = enrollmentValue;
        break;
    }

    return { ...car, venalValue: Math.trunc(venalValue), age: carAge };
  };

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

  return {
    cars,
    loadCars,
  };
};

export default useCars;
