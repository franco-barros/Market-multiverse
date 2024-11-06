import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ShoppinCardContext } from "../../Context";
import "./styles.css";
import OrderCard from "../../Components/OrderCard";
import { useCallback } from "react";
import { totalPrice } from "../../Utils";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCardContext);
  const handleDelete = useCallback(
    (id) => {
      const filteredProducts = context.cartProducts.filter(
        (product) => product.id !== id
      );
      context.setCartProducts(filteredProducts);
    },
    [context.cartProducts]
  );
  const handleCheckout = () => {
    const orderToAdd = {
      // data o date?
      // por que esta en concreto? quiza estaria bien moverla a una variable para poder nombrarla y dar mas contexto
      data: "01.02.24",
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setSearchByTitle(null);
  };
  return (
    // nunca vi este elemento `aside`. buenisimo franquito
    <aside
      // por que no poner los dos `context.isCheckoutSideMenuOpen ? ... : ...` juntos?
      className={`
          ${ context.isCheckoutSideMenuOpen ? "flex" : "hidden"}
          checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white max-w-lg w-full md:w-[35%] shadow-lg transform transition-all duration-500 ease-out
          ${ context.isCheckoutSideMenuOpen ? "translate-x-0 scale-100 opacity-100" : "translate-x-full scale-95 opacity-0"}
        `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My order</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeCheckoutSideMenu()}
            className="w-6 h-6 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          />
        </div>
      </div>
      <div className="px-6 overflow-y-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 py-4 border-t">
        <p className="flex justify-between items-center text-gray-800 mb-4">
          <span className="font-light text-lg">Total:</span>
          <span className="font-semibold text-2xl text-black-700">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            onClick={() => handleCheckout()}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Comprar ahora
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
