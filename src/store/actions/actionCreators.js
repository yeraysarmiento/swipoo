import actionTypes from "./actionTypes";

export const loadCarsAction = (cars) => ({
  type: actionTypes.loadCars,
  cars,
});
