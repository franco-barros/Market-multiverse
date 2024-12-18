import { XMarkIcon } from "@heroicons/react/24/solid";
import React, { memo } from "react";

const OrderCard = memo((props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  let renderXMarkIcon;
  if (handleDelete) {
    <XMarkIcon
      onClick={() => handleDelete(id)}
      className="w-6 h-6 text-red-500 hover:text-red-700 transition-colors cursor-pointer"
    />;
  }
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={imageUrl}
            alt={title}
            loading="lazy"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">{price}</p>
        {renderXMarkIcon}
      </div>
    </div>
  );
});

export default OrderCard;
