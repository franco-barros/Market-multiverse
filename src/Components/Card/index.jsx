import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";
import { PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(ShoppinCardContext);

  const showProduct = (ProductDetail) => {
    context.openProductDetail();
    context.setProductToShow(ProductDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutSideMenu();
    context.closeProductDetail();
  };
  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-3 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5>">
          {data.data.category.name}
        </span>
        <img
          className=" w-full h-full object-cover rounded-lg"
          src={data.data.images?.[0]}
          alt={data.data.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 bg-white rounded-full m-2 p-0.5"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="w-6 h-6 text-blue-500 hover:text-blue-700 transition-colors" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;