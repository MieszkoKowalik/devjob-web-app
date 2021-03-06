import { waitFor } from "@testing-library/react";
import { render, screen } from "test-utils";
import user from "@testing-library/user-event";
import JobsList from "./JobsList";
import { setMediaMatches } from "setupTests";

describe("JobsList view", () => {
  beforeEach(() => {
    setMediaMatches("(min-width:768px)", true);
  });

  it("Shows loading screen when entered", async () => {
    render(<JobsList />);
    expect(screen.getByLabelText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Corporate/i)).toBeInTheDocument();
  });

  it("Renders job cards when loaded", async () => {
    render(<JobsList />);
    expect(await screen.findByLabelText(/Loading/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Corporate Security Designer/i)
    ).toBeInTheDocument();
  });

  it("Changes displayed job cars based on page", async () => {
    render(<JobsList />);
    expect(await screen.findByLabelText(/Loading/i)).toBeInTheDocument();

    expect(
      await screen.findByText(/Corporate Security Designer/i)
    ).toBeInTheDocument();
    user.click(screen.getByLabelText(/next/i));
    expect(
      await screen.findByText(/Direct Quality Supervisor/i)
    ).toBeInTheDocument();
    user.click(screen.getByText(/9/i));
    expect(
      await screen.findByText(/Direct Applications Orchestrator/i)
    ).toBeInTheDocument();
  });

  it("Filters jobs by title and location", async () => {
    render(<JobsList />);
    const titleFilter = screen.getByPlaceholderText(/filter by title/i);
    const locationFilter = screen.getByPlaceholderText(/Location/i);
    const searchButton = screen.getByText("Search");
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

  it("Displays only full time jobs if full time filter is applied", async () => {
    render(<JobsList />);
    const isFullTimeFilter = screen.getByLabelText(/full time/i);
    const searchButton = screen.getByText("Search");
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
