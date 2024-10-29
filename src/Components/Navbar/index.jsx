import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";

  return (
    <nav className="flex  justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-ligth">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold text-lg">
          <NavLink to="/">Market</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronic"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronic
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3 ">
        <li className="text-black/60">francobarrosdaniel@gmail.com</li>
        <li>
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
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
            Sign In{" "}
          </NavLink>
        </li>
        <li>Carrito de compras 0</li>
      </ul>
    </nav>
  );
};

export default Navbar;
