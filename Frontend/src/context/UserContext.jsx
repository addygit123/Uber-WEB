import React, { createContext } from "react";
export const UserDataContext = createContext();

const [user, setUser] = useState({
  email: "",
  fullName: {
    firstName: "",
    lastName: "",
  },
});
const UserContext = ({ children }) => {
  return (
    <UserDataContext.Provider value={[user, setUser]}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
