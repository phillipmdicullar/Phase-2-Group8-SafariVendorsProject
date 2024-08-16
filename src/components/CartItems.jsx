import React from "react";

const CartItems = ({ item }) => {
  return (
    <tr>
      <td className="py-2 border">
        <img
          src={item.image}
          alt={item.name}
          className="w-16 h-16 object-cover"
        />
      </td>
      <td className="py-2 border">{item.name}</td>
      <td className="py-2 border">{item.category}</td>
      <td className="py-2 border">{item.vendor}</td>
      <td className="py-2 border">Ksh {item.price}</td>
      <td className="py-2 border">{item.quantity}</td>
    </tr>
  );
};

export default CartItems;
