import { getDeprecationValues, getVenalValue } from "./valuesCalculations";

describe("Given a getVenalValue function", () => {
  describe("When it receives an object car", () => {
    test("Then it should return it with a property age and venalValue", () => {
      const car = {
        value: "10000",
        period: "2020-",
      };

      const expectedCar = {
        age: 2,
        period: "2020-",
        value: "10000",
        venalValue: 8400,
      };

      const resultCar = getVenalValue(car);

      expect(resultCar).toEqual(expectedCar);
    });
  });
});

describe("Given a getDeprecationValues function", () => {
  describe("When it receives an object car", () => {
    test("Then it should return it with a property deprecationValues with an array", () => {
      const car = {
        age: 2,
        period: "2020-",
        value: "10000",
        venalValue: 8400,
      };

      const expectedCar = {
        age: 2,
        period: "2020-",
        value: "10000",
        venalValue: 8400,
        deprecationValues: [7560, 6720, 5880],
      };

      const resultCar = getDeprecationValues(car);

      expect(resultCar).toEqual(expectedCar);
    });
  });
});
