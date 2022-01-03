import { render, screen } from "test-utils";
import Job from "./Job";
import { Routes, Route } from "react-router-dom";
import { setMediaMatches } from "setupTests";

describe("Job view", () => {
  it("Shows loading screen when entered", () => {
    render(
      <Routes>
        <Route path="/job/:id" element={<Job />}></Route>
      </Routes>,
      { route: "/job/bb463b8b-b76c-4f6a-9726-65ab5730b69b" }
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("Renders Job informations when loaded", async () => {
    render(
      <Routes>
        <Route path="/job/:id" element={<Job />}></Route>
      </Routes>,
      { route: "/job/bb463b8b-b76c-4f6a-9726-65ab5730b69b" }
    );
    expect(await screen.findByText(/Deckow/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/Corporate Security Designer/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Poland/i)).toBeInTheDocument();
    expect(await screen.findByText(/Requirements/i)).toBeInTheDocument();
  });

  it("Renders Job view with more detailed footer if screen width >=768px", async () => {
    setMediaMatches("(min-width:768px)", true);
    render(
      <Routes>
        <Route path="/job/:id" element={<Job />}></Route>
      </Routes>,
      { route: "/job/bb463b8b-b76c-4f6a-9726-65ab5730b69b" }
    );
    expect(await screen.findAllByText(/Deckow/i)).toHaveLength(2);
    expect(
      await screen.findAllByText(/Corporate Security Designer/i)
    ).toHaveLength(2);
  });
});
