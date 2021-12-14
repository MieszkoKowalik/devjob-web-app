import { render, screen } from "test-utils";
import Header from "./Header";

describe("Header component", () => {
  it("Renders the component", () => {
    render(<Header />);
    expect(screen.getByLabelText(/devjobs/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dark mode/i)).toBeInTheDocument();
  });
});
