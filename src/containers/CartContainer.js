import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../components/Cart';
import CartService from '../services/CartService';
import { getCartItems as getCartItemsSaga } from '../redux/modules/cartItems';

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cartItems);

  useEffect(() => {
    if (CartService.getItem('class-cart')) {
      dispatch(getCartItemsSaga(JSON.parse(CartService.getItem('class-cart'))));
    }
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!items) return <div>No Products</div>;

  return <Cart items={items} />;
};

export default CartContainer;
