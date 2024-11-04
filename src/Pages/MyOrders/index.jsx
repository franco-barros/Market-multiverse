import { useContext } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { ShoppinCardContext } from "../../Context";
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const context = useContext(ShoppinCardContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <h1 className="text-lg font-semibold">My Orders</h1>
      </div>
      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
          <OrdersCard
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}
export default MyOrders;
