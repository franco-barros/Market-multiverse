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
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              to="/clothes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Clothes
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              to="/electronic"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronic
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              to="/furniture"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furniture
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
              to="/toys"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li className="hidden md:inline">
            <NavLink
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
              to="/orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li className="hidden sm:inline">
            <NavLink
              to="/account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sign In
            </NavLink>
          </li>
          <li className="text-lg">🛒 {context.count}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
