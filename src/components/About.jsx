import { useEffect } from "react";
import ProfileClass from "./ProfileClass";

const About = () => {
  useEffect(() => {
    // Best place to call an API
  }, []);

  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is an about us page</p>
      <ProfileClass name="Agrim" />
    </div>
  );
};

export default About;
