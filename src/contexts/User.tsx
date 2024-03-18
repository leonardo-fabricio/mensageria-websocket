import { ReactNode, createContext, useState } from "react";

export const UserContext = createContext({
  user: "",
  setUser: (str: string) => {},
});

interface UserProviderProps {
  children: ReactNode;
}
export default function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
