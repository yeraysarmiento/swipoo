import { render, screen } from "@testing-library/react";
import CarsList from "./CarsList";

describe("Given a CarList component", () => {
  describe("When it is invoked with a list of cars", () => {
    test("Then it should render as many <li> as cars", () => {
      const carsList = [
        {
          age: 2,
          brand: "Alfa Romeo",
          model: "Stelvio 2.9 Gasolina 375kW (510CV) Quadrifogl Q4",
          period: "2020-",
          cc: "2891",
          cylinders: "6",
          fuel: "G",
          kw: "375",
          cvf: "19,54",
          cv: "510",
          value: "88700",
          venalValue: 121212,
          deprecationValues: [],
        },
        {
          age: 2,
          brand: "Alfa Romeo",
          model: "Stelvio 2.9 V6 Bi-Turbo 510 HP AT8 Q4 Quadrifoglio",
          period: "2018-",
          cc: "2891",
          cylinders: "5",
          fuel: "G",
          kw: "375",
          cvf: "18,17",
          cv: "510",
          value: "81100",
          venalValue: 121212,
          deprecationValues: [],
        },
        {
          age: 2,
          brand: "Alfa Romeo",
          model: "4C 1.7 Tbi TCT / 1.75 6V 240",
          period: "2013-",
          cc: "1742",
          cylinders: "4",
          fuel: "G",
          kw: "177",
          cvf: "12,26",
          cv: "241",
          value: "42100",
          venalValue: 121212,
          deprecationValues: [],
        },
      ];

      render(<CarsList cars={carsList} />);

      const carItems = screen.getAllByRole("listitem");

      expect(carItems).toHaveLength(carsList.length);
    });
  });
});
