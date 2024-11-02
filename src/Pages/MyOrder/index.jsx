import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

function MyOrder() {
  const context = useContext(ShoppinCardContext);

  // Verifica si existe al menos una orden antes de intentar acceder a `products`
  const lastOrder =
    context.order && context.order.length > 0
      ? context.order.slice(-1)[0]
      : null;

  return (
    <Layout>
      <h2>My Order</h2>
      <div className="flex flex-col w-80">
        {lastOrder ? (
          lastOrder.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))
        ) : (
          <p>No hay productos en esta orden.</p>
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
