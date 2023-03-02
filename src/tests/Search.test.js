import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../components/Search";

it("renders learn react link", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
