import Header from "../Header";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

//*! Testing Logo
test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const logo = header.getByTestId("logo");
  //   console.log(logo);
  expect(logo.src).toBe("http://localhost/dummy.jpg");
});

//*! Testing Online
test("Online status should be green on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("online-status");
  expect(onlineStatus.innerHTML).toBe("Online ✅");
});

//*! Testing Cart
test("Cart should be empty on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cartStatus = header.getByTestId("cart-status");
  expect(cartStatus.innerHTML).toBe("Cart - 0");
});
