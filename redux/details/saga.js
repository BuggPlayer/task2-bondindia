import {all, call, put, takeLatest} from '@redux-saga/core/effects';
import DetailsAction from './DetailsAction';

function* addUser({payload}) {


  try {
    if (payload) {
      yield put(
        DetailsAction.getDetailsSuccess({
          status: true,
          msg: 'register Success',
        }),
      );
    }
  } catch (error) {}
}

export default all([takeLatest('ADD_USER_REQUEST', addUser)]);
