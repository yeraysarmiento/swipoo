import actionTypes from "../actions/actionTypes";

const carsReducer = (cars, action) => {
  let newCars;

  switch (action.type) {
    case actionTypes.loadCars:
      newCars = action.cars;
      break;
    default:
      newCars = cars;
      break;
  }

  return newCars;
};

export default carsReducer;
