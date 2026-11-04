import { createContext, useContext, useState } from "react";

type RandomNumber = {
  id: string;
  name: string;
};

type RandomNumberContextType = {
  num: RandomNumber[];
  addNumber: (n: RandomNumber) => void;
};

const RandomNumberContext = createContext<RandomNumberContextType | undefined>(
  undefined,
);

const RandomNumberProvider = ({ children }: { children: React.ReactNode }) => {
  const [num, setNum] = useState<RandomNumber[]>([]);

  const addNumber = (n: RandomNumber) => {
    setNum((prevNum) => [...prevNum, n]);
  };

  return (
    <RandomNumberContext.Provider value={{ addNumber, num }}>
      {children}
    </RandomNumberContext.Provider>
  );
};

const useNumContext = () => {
  const context = useContext(RandomNumberContext);

  if (!context) {
    throw new Error("useNumContext must be used within a RandomNumberProvider");
  }

  return context;
};

export { useNumContext, RandomNumberProvider };
