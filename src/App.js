import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartContainer from './containers/CartContainer';
import ProductListContainer from './containers/ProductListContainer';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/products" component={ProductListContainer} />
        <Route exact path="/cart" component={CartContainer} />
        <Route exact path="/" component={ProductListContainer} />
      </Switch>
    </Router>
  );
};

export default App;
