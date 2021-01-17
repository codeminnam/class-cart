import React from 'react';

const CartItem = ({ item }) => {
  return (
    <>
      <div>{item.title}</div>
      <div>{item.price}</div>
    </>
  );
};

export default CartItem;
