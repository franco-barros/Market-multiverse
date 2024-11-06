import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";

const Navbar = () => {
  const context = useContext(ShoppinCardContext);
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white shadow-md">
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-3">
          <li className="font-semibold text-lg">
            <NavLink to="/">Market</NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory()}
              to="/"
              // buenisimo esto. no le la sabia tampoco 
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory("clothes")}
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory("electronics")}
              to="/electronics"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronic
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory("furnitures")}
              to="/furnitures"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory("toys")}
              to="/toys"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              onClick={() => context.setSearchByCategory("others")}
              to="/others"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex items-center gap-3">
          <li className="text-black/60 hidden sm:inline">
            francobarrosdaniel@gmail.com
          </li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hidden sm:inline">
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li className="text-lg flex">
            <ShoppingBagIcon className=" h-6 w-6 text-green-500 hover:text-green-700 transition-colors cursor-pointer" />{" "}
            {context.cartProducts.length}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
