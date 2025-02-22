import React from "react";
import { Component } from "react";
import AboutLoader from "./AboutLoader";
import UserContext from "../utils/UserContext";

class Profile extends Component {
  constructor(props) {
    super(props);
    //* Create State
    //* this.state = {
    //*   count: 0,
    //*   count2: 1,
    //* };
    this.state = {
      isLoading: true,
      userInfo: {
        name: "",
        bio: "",
        avatar_url:
          "https://th.bing.com/th/id/OIP.WtlOYXlUYND_yTiJvsB6AQHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      },
    };
    //*console.log(`Child- constructor ${this.props.name}`);
  }
  async componentDidMount() {
    try {
      const data = await fetch("https://api.github.com/users/agrim08");
      if (!data.ok) {
        throw new Error("Network response was not ok");
      } else {
        const jsonData = await data?.json();
        this?.setState({
          userInfo: {
            ...jsonData,
          },
        });
      }
    } catch (error) {
      console.log("No data found");
    } finally {
      this.setState({ isLoading: false });
    }
    //* console.log(`Child- componentDidMount ${this.props.name}`);
  }
  //* componentDidMount() {
  //*   this.timer = setInterval(() => {
  //*     console.log("Namaste Duniya");
  //*   }, 1000);
  //* }
  componentDidUpdate(prevProps, prevState) {
    console.log("Child componentDidUpdate ");
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Child componentWillUnmount ");
  }
  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <AboutLoader />;
    }
    //* console.log(`Child- render ${this.props.name}`);
    //* const { count, count2 } = this.state;
    const { name, bio, avatar_url } = this?.state?.userInfo;
    return (
      <div>
        <h2>Name: {name}</h2>
        <h2>Bio: {bio}</h2>
        <UserContext.Consumer>
          {({ user }) => (
            <h3 className="font-bold text-orange-500 p-2 m-2 text-2xl">
              {user.name}
            </h3>
          )}
        </UserContext.Consumer>
        <img src={avatar_url} />
        <>
          {/* <div>Count: {count}</div>
        <div>Count second: {count2}</div> */}
          {/**  <button
          onClick={() =>
            //*!WE DO NOT MUTATE THE STATE DIRECTLY 
            //*! DO NOT WRITE this.state=something
            this.setState({
              count: 1,
              count2: 4,
            })
          }
        >
          Update Count
        </button> */}
        </>
      </div>
    );
  }
}
export default Profile;
