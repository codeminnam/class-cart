import React, { useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getProductsSaga(1));
  }, [dispatch]);

  const handleSetCurrentPage = (page) => {
    const pageNum = parseInt(page, 10);
    dispatch(getProductsSaga(pageNum));
    dispatch(setCurrentPage(pageNum));
  };

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Error!</div>;
  if (!products) return <div>No Data</div>;

  return (
    <>
      <ProductList
        products={products}
        length={itemLength}
        onSetCurrentPage={handleSetCurrentPage}
      />
    </>
  );
};

export default ProductListContainer;
