import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductsList from './pages/ProductsList';
import Cart from './pages/Cart';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/products" component={ProductsList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/" component={ProductsList} />
      </Switch>
    </Router>
  );
};

export default App;
