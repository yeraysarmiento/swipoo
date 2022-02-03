import actionTypes from "../actions/actionTypes";
import carsReducer from "./carsReducer";

describe("Given a carsReducer", () => {
  describe("When it receives a list of cars and a loadCars action", () => {
    test("Then it should return a list of cars", () => {
      const cars = [{}, {}];
      const action = {
        type: actionTypes.loadCars,
        cars,
      };

      const carsList = carsReducer([], action);

      expect(carsList).toHaveLength(cars.length);
    });
  });
  describe("When it receives a filter and a list of cars", () => {
    test("Then it should return the cars that match the filter", () => {
      const cars = [{ model: "Seat" }, { model: "Fiat" }];
      const action = {
        type: actionTypes.filterCars,
        filter: "Seat",
      };

      const carsList = carsReducer(cars, action);

      expect(carsList).toHaveLength(1);
      expect(carsList).toContainEqual({ model: "Seat" });
    });
  });
});
