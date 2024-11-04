import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const { id } = useParams();
  const context = useContext(ShoppinCardContext);

  const orderIndex = id ? parseInt(id, 10) : context.order.length - 1;
  const order = context.order?.[orderIndex];

  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order ? (
          order.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        ) : (
          <p>Order not found.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
