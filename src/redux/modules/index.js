import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import products, { productsSaga } from './products';

const rootReducer = combineReducers({
  products,
});
export function* rootSaga() {
  yield all([productsSaga()]);
}

export default rootReducer;
