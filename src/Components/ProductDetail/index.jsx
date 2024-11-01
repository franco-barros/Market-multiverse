import { XMarkIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppinCardContext } from "../../Context";
import "./styles.css";

const ProductDetail = () => {
  const context = useContext(ShoppinCardContext);
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white max-w-lg w-full md:w-[35%] shadow-lg transform transition-all duration-500 ease-out ${
        context.isProductDetailOpen
          ? "translate-x-0 scale-100 opacity-100"
          : "translate-x-full scale-95 opacity-0"
      }`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="w-6 h-6 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 p-4">
        <figure className="w-full max-w-md px-6">
          {context.productToShow?.images?.[0] ? (
            <img
              className="w-full h-auto max-h-96 rounded-lg object-cover"
              src={context.productToShow.images[0]}
              alt={context.productToShow.title}
            />
          ) : (
            <p>No image available</p>
          )}
        </figure>
        <p className="text-center flex flex-col space-y-2 w-full max-w-md px-6">
          <span className="text-lg font-semibold">
            ${context.productToShow.price}
          </span>
          <span className="text-md font-medium">
            ${context.productToShow.title}
          </span>
          <span className=" font-light text-sm">
            ${context.productToShow.description}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default ProductDetail;
