import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //* console.log("Parent - constructor");
  }
  componentDidMount() {
    //* Best place to call an API
    //* console.log("Parent - componentDidMount");
  }
  render() {
    //* console.log("Parent - render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>This is an about us page</p>
        <ProfileClass name={"Agrim"} />
      </div>
    );
  }
}
export default About;
