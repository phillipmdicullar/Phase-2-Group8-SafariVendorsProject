import React from "react";

const CartItems = ({ item, index }) => {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <td className="rounded-full w-20 h-20">{item.image}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td>{item.vendor}</td>
      <td>{item.price}</td>
      <td>{item.location}</td>
      <td>
        <input type="number" />
      </td>
    </tr>
  );
};

export default CartItems;
