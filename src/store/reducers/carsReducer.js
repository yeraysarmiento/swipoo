import actionTypes from "../actions/actionTypes";

const carsReducer = (cars, action) => {
  let newCars;

  switch (action.type) {
    case actionTypes.loadCars:
      newCars = action.cars;
      break;
    case actionTypes.filterCars:
      newCars = [...cars.filter((car) => car.model === action.filter)];
      break;
    default:
      newCars = cars;
      break;
  }

  return newCars;
};

export default carsReducer;
