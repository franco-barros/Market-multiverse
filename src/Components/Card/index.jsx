import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

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

  // esto suena a un nuevo componente
  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      // aqui se repiten algunas clases, quiza estaria bien meter un componente con estilos?
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center w-8 h-8 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-green-500 rounded-full m-2 p-1 shadow-lg transform transition-transform duration-200 hover:scale-110">
          <CheckIcon className="w-full h-full text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-8 h-8 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-white rounded-full m-2 p-1 shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-110 hover:bg-green-200"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="w-full h-full " />
        </div>
      );
    }
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
          loading="lazy"
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-bold">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
