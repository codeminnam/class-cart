import React from 'react';
import ProductCard from './ProductCard';
import PageList from './PageList';

const ProductList = ({ products, length, onSetCurrentPage }) => {
  return (
    <>
      <ProductCard products={products} />
      <PageList length={length} onSetCurrentPage={onSetCurrentPage} />
    </>
  );
};

export default ProductList;
