import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { memo } from "react";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg w-80 p-4">
      <div className="flex flex-col">
        <span>01.02.2024</span>
        <span className="font-light text-lg">{totalProducts} articles</span>
      </div>
      <span className="font-semibold text-2xl text-black-700">
        ${totalPrice}
      </span>
      <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
    </div>
  );
};

export default memo(OrdersCard);
