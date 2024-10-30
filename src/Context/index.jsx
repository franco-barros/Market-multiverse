import { Children, createContext, useState } from "react";

export const ShoppinCardContext = createContext();

export const ShoppinCardProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <ShoppinCardContext.Provider value={{ count, setCount }}>
      {children}
    </ShoppinCardContext.Provider>
  );
};
