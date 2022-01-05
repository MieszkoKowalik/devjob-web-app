import { waitFor } from "@testing-library/react";
import { render, screen, fireEvent } from "test-utils";
import JobsList from "./JobsList";

describe("JobsList view", () => {
  it("Shows loading screen when entered", () => {
    render(<JobsList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it("Renders job cards when loaded", async () => {
    render(<JobsList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.getAllByText(/1d ago/i)).toHaveLength(12)
    );
  });
  it("Loads 12 more job cards after clicking load more button", async () => {
    render(<JobsList />);
    await waitFor(() =>
      expect(screen.getAllByText(/1d ago/i)).toHaveLength(12)
    );
    fireEvent.click(screen.getByText(/load more/i));
    await waitFor(() =>
      expect(screen.getAllByText(/1d ago/i)).toHaveLength(24)
    );
  });
});
