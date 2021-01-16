import React from 'react';
import ProductCard from './ProductCard';
import PageList from './PageList';

const ProductList = ({ products, length, onSetCurrentPage, onToggleCart }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onToggleCart={onToggleCart}
        />
      ))}
      <PageList length={length} onSetCurrentPage={onSetCurrentPage} />
    </>
  );
};

export default ProductList;
