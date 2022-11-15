import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("title exists", () => {
    render(<App />);
    const text = screen.getByText("Casey's Cool Web App!!!")
    expect(text).toBeInTheDocument();
  });

  test('four user list items exist', () => {
    render(<App />);
    const items = screen.getAllByText(/working/i);
    expect(items).toHaveLength(4);
  })
});