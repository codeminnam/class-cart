import React from 'react';
import ItemTable from './ItemTable';
import CartItem from './CartItem';
import PriceTable from './PriceTable';

const Cart = ({ items }) => {
  return (
    <>
      <ItemTable items={items} />
      <PriceTable />
    </>
  );
};

export default Cart;
