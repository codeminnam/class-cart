import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div``;
const ContentContainer = styled.div`
  padding-bottom: 100px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
