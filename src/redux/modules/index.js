import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import products, { productsSaga } from './products';
import cartItems, { cartItemsSaga } from './cartItems';

const rootReducer = combineReducers({
  products,
  cartItems,
});
export function* rootSaga() {
  yield all([productsSaga(), cartItemsSaga()]);
}

export default rootReducer;
