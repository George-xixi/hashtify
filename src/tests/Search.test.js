import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search";

xit("renders Search component", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
