import { delay, put, takeEvery } from 'redux-saga/effects';

const INCREASE = 'products/INCREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';

export const increase = () => ({ type: INCREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });

function* increaseSaga() {
  yield delay(1000);
  yield put(increase());
}

export function* productsSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
}

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
};

export default reducer;
