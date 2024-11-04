import { Children, createContext, useState } from "react";
export const ShoppinCardContext = createContext();
import { useEffect } from "react";
export const ShoppinCardProvider = ({ children }) => {
  //Shopping Card - Increment quantity
  const [count, setCount] = useState(0);

  //Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Checkout Side Menu - Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false);

  //Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});
  //Shopping  Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  //Shopping cart - Order
  const [order, setOrder] = useState([]);
  //Get products
  const [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  //Get products By title
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    } else {
      setFilteredItems(items);
    }
  }, [items, searchByTitle]);
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
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppinCardContext.Provider>
  );
};
