import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../components/ProductList';
import { increaseAsync } from '../redux/modules/products';

const ProductListContainer = () => {
  const { counter } = useSelector((state) => ({
    counter: state.products.counter,
  }));

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseAsync());

  return (
    <>
      <ProductList />
      {counter}
      <button type="button" onClick={() => onIncrease()}>
        +
      </button>
    </>
  );
};

export default ProductListContainer;
