import { createContext, useState } from "react";
import { getUser } from "";

export function UseContextProvider({ children }) {
  const [user, setUser] = useState(getUser());

  return (
    <UserContext.Provider children={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

const UserContext = createContext();
export default UserContext;