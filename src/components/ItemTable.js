import React from 'react';
import CartItem from './CartItem';

const ItemTable = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </>
  );
};

export default ItemTable;
