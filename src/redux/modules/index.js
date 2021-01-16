import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import products, { productsSaga } from './products';
import cartProducts from './cartProducts';

const rootReducer = combineReducers({
  products,
  cartProducts,
});
export function* rootSaga() {
  yield all([productsSaga()]);
}

export default rootReducer;
