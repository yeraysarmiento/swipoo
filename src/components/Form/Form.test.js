import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is invoked with an onChange function", () => {
    test("Then it should render three <select> tag and a <heading> with 'Encuentra tu vehículo' on it", () => {
      render(<Form onChange={() => {}} />);

      const heading = screen.getByRole("heading", {
        name: /encuentra tu vehículo/i,
      });
      const selects = screen.getAllByRole("combobox");

      expect(heading).toBeInTheDocument();
      expect(selects).toHaveLength(2);
    });

    describe("And the user types a selection", () => {
      test("Then the function onChange should be called", () => {
        const onChange = jest.fn();

        render(<Form onChange={onChange} />);
        const selectBrand = screen.getByTestId("brand");
        fireEvent.change(selectBrand, {
          target: { value: "Seat" },
        });

        expect(onChange).toHaveBeenCalled();
      });
    });
  });
});
