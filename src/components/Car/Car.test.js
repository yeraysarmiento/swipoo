import { render, screen } from "@testing-library/react";
import Car from "./Car";

describe("Given a Car component", () => {
  describe("When it is called with a car object", () => {
    test("Then it should render a <heading> with the brand and model", () => {
      const car = {
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
      };

      render(<Car car={car} />);

      const brandHeading = screen.getByRole("heading", {
        name: car.brand.toUpperCase(),
      });
      const modelHeading = screen.getByRole("heading", { name: car.model });

      expect(brandHeading).toBeInTheDocument();
      expect(modelHeading).toBeInTheDocument();
    });
  });
});
