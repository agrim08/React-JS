import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    return null;
  }, []);
  return (
    <div>
      <h3>Functional Profile Page</h3>
      <div>Name : {props.name}</div>
      <div>Count : {count}</div>
      <div>Count Second : {count2}</div>
      <button onClick={() => (setCount(1), setCount2(4))}>Change Count</button>
    </div>
  );
};
export default Profile;
