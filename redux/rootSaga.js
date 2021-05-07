import {all} from 'redux-saga/effects';
import detailssaga from './details/saga';
export default function* rootSaga() {
  return yield all([
    detailssaga
  ]);
}
