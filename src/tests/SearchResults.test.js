import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  let results = "test test test test";
  xit("renders search results correctly", () => {
    const { asFragment } = render(
      <BrowserRouter>
        <SearchResults searchResults={results} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  xit("renders no search results correctly", () => {
    results = "";
    const { asFragment } = render(
      <BrowserRouter>
        <SearchResults searchResults={results} />
      </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
