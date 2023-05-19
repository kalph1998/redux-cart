import {put, takeEvery} from 'redux-saga/effects';
import {SET_USER_DATA, USER_LIST} from './constants';
function* userList() {
  const url = 'https://dummyjson.com/users';

  let data = yield fetch(url);
  dataJson = yield data.json();

  yield put({type: SET_USER_DATA, data: dataJson});
}
export default function* sagaData() {
  yield takeEvery(USER_LIST, userList);
}
