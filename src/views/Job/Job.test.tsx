import { render, screen } from "test-utils";
import Job from "./Job";
import { Routes, Route } from "react-router-dom";

describe("Job view", () => {
  it("Shows loading screen when entered", () => {
    render(<Job />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
  it("Renders job cards when loaded", async () => {
    render(
      <Routes>
        <Route path="/job/:id" element={<Job />}></Route>
      </Routes>,
      { route: "/job/bb463b8b-b76c-4f6a-9726-65ab5730b69b" }
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/Deckow/i)).toBeInTheDocument();
  });
});
