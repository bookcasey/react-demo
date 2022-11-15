import { render, screen } from "@testing-library/react";
import UserListItem from "./UserListItem";

describe("UserListItem", () => {
  test("renders without crashing", () => {
    render(<UserListItem />);
  });

  test("renders the message", () => {
    render(<UserListItem name={'Casey'} tech={'React'} color={'blue'} />);
    const text = screen.getByText('Casey working on React');
    expect(text).toBeInTheDocument();
    expect(text).toHaveStyle({ backgroundColor: 'blue' })
  });
});