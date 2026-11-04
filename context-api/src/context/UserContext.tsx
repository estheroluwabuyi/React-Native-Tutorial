import { createContext, useContext, useState } from "react";

const UserContext = createContext<
  | {
      user: string;
      setUser: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string>("Esther");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

const userContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("userContext must be used within a UserProvider");
  }
  return context;
};

export { userContext, UserProvider };
