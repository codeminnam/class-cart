import { call, put, takeEvery } from 'redux-saga/effects';
import ProductService from '../../services/ProductService';

const GET_PRODUCTS = 'products/GET_PRODUCTS';
const PENDING = 'products/PENDING';
const SUCCESS = 'products/SUCCESS';
const ERROR = 'products/ERROR';

export const getProducts = () => ({ type: GET_PRODUCTS });
export const pending = () => ({ type: PENDING });
export const success = (products) => ({
  type: SUCCESS,
  payload: products,
});
export const error = (e) => ({ type: ERROR, payload: e });

function* getProductsSaga() {
  try {
    yield put({ type: PENDING });
    const products = yield call(ProductService.getItems);
    yield put({
      type: SUCCESS,
      payload: products,
    });
  } catch (e) {
    yield put({
      type: ERROR,
      payload: e,
    });
  }
}

export function* productsSaga() {
  yield takeEvery(GET_PRODUCTS, getProductsSaga);
}

const initialState = {
  products: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        loading: false,
        products: state.products,
        error: null,
      };
    case PENDING:
      return {
        loading: true,
        products: state.products,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        products: action.payload,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        products: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
