import { createAction } from '@reduxjs/toolkit'

const FETCH_GITHUB_REPOS_START = 'FETCH_GITHUB_REPOS_START'
export const fetchGithubReposStart = createAction<void>(
  FETCH_GITHUB_REPOS_START
)
