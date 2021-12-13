import userEvent from "@testing-library/user-event";
import { render, screen } from "test-utils";
import ThemeToggler from "./ThemeToggler";

const setMatchMediaToTrue = () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
};

describe("ThemeToggler component", () => {
  beforeEach(() => {
    localStorage.removeItem("darkMode");
  });

  it("Is not checked if there is no value darkMode in Local Storage", () => {
    render(<ThemeToggler />);
    expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("Is checked if dark mode is set to true in Local Storage", () => {
    localStorage.setItem("darkMode", JSON.stringify(true));
    render(<ThemeToggler />);
    expect(screen.getByLabelText("Dark Mode")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("Can be checked and unchecked by user", () => {
    render(<ThemeToggler />);
    const label = screen.getByLabelText("Dark Mode");
    const checkbox = screen.getByRole("checkbox");
    userEvent.click(label);
    expect(checkbox).toBeChecked();
    userEvent.click(label);
    expect(checkbox).not.toBeChecked();
  });

  it("Is checked if OS color scheme preference is set to dark", () => {
    setMatchMediaToTrue();
    render(<ThemeToggler />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });
});
