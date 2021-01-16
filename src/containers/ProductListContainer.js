import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts as getProductsSaga } from '../redux/modules/products';

const ProductListContainer = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsSaga());
  }, [dispatch]);

  return (
    <>
      <ProductList />
    </>
  );
};

export default ProductListContainer;
