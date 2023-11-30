import {
  takeLatest,
  call,
  put,
  fork,
  CallEffect,
  PutEffect,
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import { fetchGithubReposStart } from './landingActions'
import { setGithubRepos } from './landingSlice'
import { fetchGithubReposCall } from './landingApi'

// Worker Sagas
function* fetchGithubRepos(): Generator<
  CallEffect<any[]> | PutEffect<AnyAction>
> {
  const githubRepos: any = yield call(fetchGithubReposCall)
  yield put(setGithubRepos(githubRepos))
}

// Watcher Sagas
function* watchFetchGithubRepo() {
  yield takeLatest(fetchGithubReposStart, fetchGithubRepos)
}

const landingSagas = [fork(watchFetchGithubRepo)]

export default landingSagas
