import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "dummmy@yahoo.com",
  },
});

export default UserContext;
