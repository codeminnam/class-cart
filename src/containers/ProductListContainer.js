import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import {
  getProducts as getProductsSaga,
  setCurrentPage,
} from '../redux/modules/products';

const ProductListContainer = () => {
  const { products, itemLength, loading, error } = useSelector(
    (state) => state.products,
  );
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    dispatch(getProductsSaga(1));
  }, [dispatch]);

  const handleSetCurrentPage = (page) => {
    const pageNum = parseInt(page, 10);
    dispatch(getProductsSaga(pageNum));
    dispatch(setCurrentPage(pageNum));
  };

  const handleToggleCart = (id) => {
    if (cartItems.includes(id)) {
      localStorage.setItem(
        'class-cart',
        JSON.stringify([...cartItems.filter((value) => value !== id)]),
      );
      setCartItems([...cartItems.filter((value) => value !== id)]);
    } else if (cartItems.length >= 3) {
      alert('장바구니에는 상품을 3개까지 담을 수 있습니다.');
    } else {
      cartItems.push(id);
      localStorage.setItem('class-cart', JSON.stringify([...cartItems]));
    }
  };

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!products) return <div>No Products</div>;

  return (
    <>
      <ProductList
        products={products}
        length={itemLength}
        onSetCurrentPage={handleSetCurrentPage}
        onToggleCart={handleToggleCart}
      />
    </>
  );
};

export default ProductListContainer;
