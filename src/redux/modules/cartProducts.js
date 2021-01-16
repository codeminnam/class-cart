import { call, put, takeEvery } from 'redux-saga/effects';
import ProductService from '../../services/ProductService';

const GET_PRODUCTS = 'products/GET_PRODUCTS';
const PENDING = 'products/PENDING';
const SUCCESS = 'products/SUCCESS';
const ERROR = 'products/ERROR';
const SET_CURRENT_PAGE = 'products/SET_CURRENT_PAGE';

export const getProducts = (pageNum) => ({
  type: GET_PRODUCTS,
  payload: pageNum,
});
export const pending = () => ({ type: PENDING });
export const success = (products) => ({
  type: SUCCESS,
  payload: products,
});
export const error = (e) => ({ type: ERROR, payload: e });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

function* getProductsSaga(action) {
  try {
    yield put({ type: PENDING });
    console.log(action.payload);
    const products = yield call(ProductService.getProducts, action.payload);
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
  itemLength: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        loading: false,
        products: state.products,
        itemLength: state.itemLength,
        currentPage: state.currentPage,
        error: null,
      };
    case PENDING:
      return {
        loading: true,
        products: state.products,
        itemLength: state.itemLength,
        currentPage: state.currentPage,
        error: null,
      };
    case SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        itemLength: action.payload.itemLength,
        currentPage: state.currentPage,
        error: null,
      };
    case ERROR:
      return {
        loading: false,
        products: null,
        itemLength: state.itemLength,
        currentPage: state.currentPage,
        error: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        loading: false,
        products: state.products,
        itemLength: state.itemLength,
        currentPage: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
