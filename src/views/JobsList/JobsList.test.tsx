import { waitFor } from "@testing-library/react";
import { render, screen, fireEvent } from "test-utils";
import user from "@testing-library/user-event";
import JobsList from "./JobsList";

describe("JobsList view", () => {
  it("Shows loading screen when entered", async () => {
    render(<JobsList />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Corporate/i)).toBeInTheDocument();
  });
  it("Renders job cards when loaded", async () => {
    render(<JobsList />);
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
  it("Filters jobs by title and location", async () => {
    render(<JobsList />);
    const titleFilter = screen.getByPlaceholderText(/filter by title/i);
    const locationFilter = screen.getByPlaceholderText(/Location/i);
    const searchButton = screen.getByText(/search/i);
    user.type(titleFilter, "Regional");
    user.click(searchButton);
    await waitFor(() =>
      expect(
        screen.queryByText(/Corporate Security Designer/i)
      ).not.toBeInTheDocument()
    );
    expect(
      await screen.findByText(/Regional Directives Planner/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Regional Configuration Consultant/i)
    ).toBeInTheDocument();

    user.type(locationFilter, "Dominica");
    user.click(searchButton);
    await waitFor(() =>
      expect(
        screen.queryByText(/Regional Directives Planner/i)
      ).not.toBeInTheDocument()
    );
    expect(
      await screen.findByText(/Regional Configuration Consultant/i)
    ).toBeInTheDocument();
  });

  it("Displays only full time jobs", async () => {
    render(<JobsList />);
    const isFullTimeFilter = screen.getByLabelText(/full time only/i);
    const searchButton = screen.getByText(/search/i);
    user.click(isFullTimeFilter);
    user.click(searchButton);
    await waitFor(() =>
      expect(
        screen.queryByText(/Senior Markets Engineer/i)
      ).not.toBeInTheDocument()
    );

    expect(await screen.findByText(/Corporate/i)).toBeInTheDocument();
  });
});
