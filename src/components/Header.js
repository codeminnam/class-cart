import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faShoppingCart);

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 40px;
  margin-bottom: 20px;
  border-bottom: 1px solid #eaecef;
`;

const Title = styled.h1`
  font-weight: 900;
  line-height: 2.3;
`;

const Button = styled.button`
  background-color: #ffffff;
  padding: 10px;
  border: 1px solid #f5f5f7;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f7;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>CLASS CART</Title>
      <Button type="button">
        <FontAwesomeIcon icon={['fa', 'shopping-cart']} />
      </Button>
    </HeaderContainer>
  );
};

export default Header;
