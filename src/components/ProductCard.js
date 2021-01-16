import React, { useEffect, useState } from 'react';
import CartService from '../services/CartService';

const ProductCard = ({ product, onToggleCart }) => {
  const [inCart, setInCart] = useState(false);
  const { id, title, coverImage, price } = product;

  useEffect(() => {
    if (CartService.checkCart(id)) {
      setInCart(true);
    }
  }, []);

  const handleClickCart = (itemId) => {
    onToggleCart(itemId);
    if (CartService.checkCart(id)) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  };

  return (
    <div>
      <img src={coverImage} alt="card" width="100px" />
      <div>{title}</div>
      <div>{price}</div>
      <button type="button" onClick={() => handleClickCart(id)}>
        {inCart ? '비우기' : '담기'}
      </button>
    </div>
  );
};

export default ProductCard;
