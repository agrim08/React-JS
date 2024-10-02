import React from "react";
import ReactDOM from "react-dom/client";
import restaurantsList from "./restrauntList";

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
//*! React.Fragment:- exported from react

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo-image"
          src="https://th.bing.com/th/id/OIP.o4JCypYF9DBCugMEw0B2ZQHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="logo"
        />
      </a>
    </>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, locality }) => {
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}
          `}
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

const Footer = () => {
  return <h1>Footer</h1>;
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

//Styling in jsx
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
