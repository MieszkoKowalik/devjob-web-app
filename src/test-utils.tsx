import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import AppProviders from "providers/AppProviders";

const AllTheProviders: FC = ({ children }) => {
  return <AppProviders>{children}</AppProviders>;
};
const customRender = (
  ui: ReactElement,
  { route = "/" } = {},
  options?: Omit<RenderOptions, "wrapper">
) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: AllTheProviders, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
