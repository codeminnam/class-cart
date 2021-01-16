import React from 'react';

const ProductCard = ({ products }) => {
  return products.map((product) => (
    <div key={product.id}>
      <img src={product.coverImage} alt="card" width="100px" />
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button type="button">담기</button>
    </div>
  ));
};

export default ProductCard;
