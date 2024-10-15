import Body from "../Body";
import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import restaurantsData from "../../mocks/DummyRestaurant";
import "@testing-library/jest-dom";

// Mocking global fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(restaurantsData),
  })
);

test("Shimmer should load first and then restaurants should load", async () => {
  // Render the component wrapped with Redux provider and StaticRouter
  const body = render(
    <Provider store={store}>
      <StaticRouter>
        <Body />
      </StaticRouter>
    </Provider>
  );

  // Check if shimmer is present initially (before data is loaded)
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(20); // Assuming shimmer has 20 children

  // Wait for the data to load and check for search button or other UI components
  await waitFor(() =>
    expect(screen.getByTestId("search-btn")).toBeInTheDocument()
  );

  // After loading, the shimmer should no longer be in the document
  expect(screen.queryByTestId("shimmer")).not.toBeInTheDocument();
});
