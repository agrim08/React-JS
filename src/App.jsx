import React from "react";
import ReactDOM from "react-dom/client";
import restaurantsList from "./Data/restrauntList";
import HeaderComponent from "./components/Header";
import Footer from "./components/Footer";

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
//*React.Fragment:- exported from react

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h4>{name}</h4>
      <h4>{cuisines.join(" ")}</h4>
      <h4> {locality}</h4>
    </div>
  );
};

//* props:-
const Body = () => {
  return (
    <div className="restraunt-lists">
      {restaurantsList.map((restaurants) => {
        return (
          <RestaurantCard {...restaurants.info} key={restaurants.info.id} />
        );
      })}
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <Body></Body>
      <Footer></Footer>
    </>
  );
};

//*Styling in jsx
/**
 ** const styleObj = {
 **backgroundColor: "red",
 **  };
 **const jsx = (
 **  <div style={styleObj}>
 **    <h1>jsx</h1>
 **    <h1>second jsx</h1>
 **  </div>
 **);
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
