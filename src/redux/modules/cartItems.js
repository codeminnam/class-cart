import { call, put, takeEvery } from 'redux-saga/effects';
import ProductService from '../../services/ProductService';

const GET_CART_ITEMS = 'cartItems/GET_CART_ITEMS';
const PENDING = 'cartItems/PENDING';
const SUCCESS = 'cartItems/SUCCESS';
const ERROR = 'cartItems/ERROR';

export const getCartItems = (cartItems) => ({
  type: GET_CART_ITEMS,
  payload: cartItems,
});
export const pending = () => ({ type: PENDING });
export const success = (products) => ({
  type: SUCCESS,
  payload: products,
});
export const error = (e) => ({ type: ERROR, payload: e });

function* getCartItemsSaga(action) {
  try {
    yield put({ type: PENDING });
    console.log(action.payload);
    const items = yield call(ProductService.getCartItems, action.payload);
    yield put({
      type: SUCCESS,
      payload: items,
    });
  } catch (e) {
    yield put({
      type: ERROR,
      payload: e,
    });
  }
}

export function* cartItemsSaga() {
  yield takeEvery(GET_CART_ITEMS, getCartItemsSaga);
}

const initialState = {
  items: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        loading: true,
        items: state.items,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        items: action.payload.items,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        items: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
