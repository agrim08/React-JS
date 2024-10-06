import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h1>OOPS !😶‍🌫️</h1>
      <h2>{`${err.status} : ${err.statusText}`}</h2>
      <img
        style={{
          display: "block",
          marginLeft: " auto",
          marginRight: " auto",
          width: "50%",
        }}
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png"
        alt=""
      />
    </>
  );
};
export default Error;
