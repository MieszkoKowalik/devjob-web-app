import { render, screen } from "test-utils";
import JobsList from "./JobsList";

describe("JobsList view", () => {
  it("Shows loading screen when entered", () => {
    render(<JobsList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it("Renders job cards when loaded", async () => {
    render(<JobsList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Corporate/i)).toBeInTheDocument();
  });
});
