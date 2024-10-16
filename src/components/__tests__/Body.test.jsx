import Body from "../Body";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import restaurantsData from "../../mocks/DummyRestaurant";
import "@testing-library/jest-dom";

// Mock global fetch
global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => {
      Promise.resolve(restaurantsData);
    },
  });
});

test("Shimmer should load first and then restaurants should load", async () => {
  // Render the component wrapped with Redux provider and StaticRouter
  render(
    <Provider store={store}>
      <StaticRouter>
        <Body />
      </StaticRouter>
    </Provider>
  );

  // Assert shimmer is in the document initially (before data is loaded)
  await waitFor(() =>
    expect(screen.getByTestId("search-btn")).toBeInTheDocument()
  );
  const shimmer = screen.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(20);
  console.log(shimmer);
});
