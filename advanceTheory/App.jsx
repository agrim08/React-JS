//*! React.createElement => Object => HTML(DOM)
//*! JSX(Babel) => React.createElement => Object => HTML(DOM)
import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 id="title">Namaste React from react element</h1>;
const Title = () => {
  return <h1>Hello from title</h1>;
};

//React component
//* functional component
//* Class Based component

const num = 10;
const HeaderComponent = () => {
  return (
    //not mandatory to write a return
    <div>
      {num + 10}
      {console.log("Any JS code")}
      {heading}
      <Title />
      {Title()}
      <h2>Hello from React component</h2>
      <h2>This is sample h2</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading) //*this is for react element
root.render(<HeaderComponent />); //this is for functional component
