import {
  takeLatest,
  call,
  put,
  fork,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import { fetchChangelogStart } from './changelogActions'
import { setChangelogs } from './changelogSlice'
import { fetchChangelogCall } from './changelogApi'

// Worker Sagas
function* fetchChangelog(): Generator<
  CallEffect<any[]> | PutEffect<AnyAction>
> {
  const githubRepos: any = yield call(fetchChangelogCall)
  yield put(setChangelogs(githubRepos))
}

// Watcher Sagas
function* watchFetchChangelog() {
  yield takeLatest(fetchChangelogStart, fetchChangelog)
}

const landingSagas = [fork(watchFetchChangelog)]

export default landingSagas
