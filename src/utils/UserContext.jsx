import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "",
    email: "",
  },
});

export default UserContext;
