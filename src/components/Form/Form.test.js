import { fireEvent, render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is invoked with an onFetch function", () => {
    test("Then it should render three <select> tag and a <heading> with 'Encuentra tu vehículo' on it", () => {
      render(<Form onFetch={() => {}} setMessage={() => {}} />);

      const heading = screen.getByRole("heading", {
        name: /encuentra tu vehículo/i,
      });
      const selects = screen.getAllByRole("combobox");

      expect(heading).toBeInTheDocument();
      expect(selects).toHaveLength(2);
    });

    test("Then the button should be disabled", () => {
      render(<Form onFetch={() => {}} setMessage={() => {}} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });

    describe("And when the user fills all inputs and clicks on submit", () => {
      test("Then the function onFetch should be called", () => {
        const onFetch = jest.fn();

        render(<Form onFetch={onFetch} setMessage={() => {}} />);
        const selectBrand = screen.getByTestId("brand");
        const selectFuel = screen.getByTestId("fuel");
        const enrollmentDate = screen.getByLabelText("Fecha de matriculación:");
        const form = screen.getByLabelText("form");

        fireEvent.change(selectBrand, {
          target: { value: "Seat" },
        });
        fireEvent.change(selectFuel, {
          target: { value: "Gasolina" },
        });
        fireEvent.focus(enrollmentDate);
        fireEvent.change(enrollmentDate, { target: { value: "2000-01-01" } });
        fireEvent.submit(form);

        expect(onFetch).toHaveBeenCalled();
      });
    });
  });
});
