import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();
const getLocalStorage = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return [];
  }
};

export default function UserAuth({ children }) {
  const [user, setUser] = useState(getLocalStorage());

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    console.log(localStorage.getItem("user"));
  }, [user]);

  // useEffect(() => {
  //   localStorage.getItem("user")
  //     ? setUser(JSON.parse(localStorage.getItem("user")))
  //     : setUser([]);
  //   console.log(localStorage.getItem("user"));
  // }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
