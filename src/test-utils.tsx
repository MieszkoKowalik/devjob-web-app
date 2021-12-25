import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemesProvider from "providers/ThemesProvider";
import { MemoryRouter } from "react-router-dom";

const AllTheProviders: FC = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemesProvider>{children}</ThemesProvider>
    </MemoryRouter>
  );
};
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
