import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When it is invoked", () => {
    test("Then it should render a <h1> tag with accessible name 'Logo of Swipoo'", () => {
      render(<Header />);

      const heading = screen.getByRole("heading", { name: "Logo of Swipoo" });

      expect(heading).toBeInTheDocument();
    });
  });
});
