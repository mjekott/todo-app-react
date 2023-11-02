import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders APP", () => {
  render(<App />);
  expect(screen.getByText("TODO")).toBeInTheDocument();
});
