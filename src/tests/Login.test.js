import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../components/Login";

it("renders Login component", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
