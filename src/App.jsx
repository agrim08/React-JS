import React, { lazy, Suspense, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantsMenu";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Loader";
import useOnline from "./utils/useOnline";

/**
 * Header
 *  -logo
 *  - Nav Items
 *  - Cart
 *
 * Body
 *  -Search Bar
 *  - Restraunt List
 *    -RestrauntCard
 *      -image
 *      -price
 *      -name
 *      -Cusines
 * Footer
 *  -Links
 */

//* Upon on demand loading, react suspend the rendering
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const online = useOnline();
  if (!online) {
    return (
      <>
        <div>📶 No Signal</div>
        <h3>
          ⚠️ Oops! It seems like the internet took a break. Please reconnect
        </h3>
      </>
    );
  }

  return (
    <>
      <HeaderComponent />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM?.createRoot(document?.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
