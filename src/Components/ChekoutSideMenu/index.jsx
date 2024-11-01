import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppinCardContext } from "../../Context";
import "./styles.css";
import OrderCard from "../../Components/OrderCard";
const CheckoutSideMenu = () => {
  const context = useContext(ShoppinCardContext);

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white max-w-lg w-full md:w-[35%] shadow-lg transform transition-all duration-500 ease-out ${
        context.isCheckoutSideMenuOpen
          ? "translate-x-0 scale-100 opacity-100"
          : "translate-x-full scale-95 opacity-0"
      }`}
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
      <div className="px-6">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            imageUrl={product.images}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export default CheckoutSideMenu;
