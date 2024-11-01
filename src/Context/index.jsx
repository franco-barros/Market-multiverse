import { Children, createContext, useState } from "react";
export const ShoppinCardContext = createContext();

export const ShoppinCardProvider = ({ children }) => {
  //Shopping Card - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppinCardContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppinCardContext.Provider>
  );
};
