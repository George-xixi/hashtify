import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyHashtags from "../components/MyHashtags";

xit("renders Login component", () => {
  const { asFragment } = render(
    <BrowserRouter>
      <MyHashtags />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});
