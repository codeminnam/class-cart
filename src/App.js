import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './theme/globalStyles';
import Layout from './components/Layout';
import CartContainer from './containers/CartContainer';
import ProductListContainer from './containers/ProductListContainer';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Layout>
            <Route exact path="/products" component={ProductListContainer} />
            <Route exact path="/cart" component={CartContainer} />
            <Route exact path="/" component={ProductListContainer} />
          </Layout>
        </Switch>
      </Router>
    </>
  );
};

export default App;
