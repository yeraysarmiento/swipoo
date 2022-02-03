import actionTypes from "./actionTypes";

export const loadCarsAction = (cars) => ({
  type: actionTypes.loadCars,
  cars,
});

export const filterCarsAction = (filter) => ({
  type: actionTypes.filterCars,
  filter,
});
