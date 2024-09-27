const heading1 = React.createElement("h1", { id: "title" }, "Heading 1");
const heading2 = React.createElement("h2", { id: "title" }, "Heading 2");
const conatiner = React.createElement("div", { id: "conatiner" }, [
  heading1,
  heading2,
]);
//this is how we add multiple element using array
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(conatiner);
root.render(conatiner);
