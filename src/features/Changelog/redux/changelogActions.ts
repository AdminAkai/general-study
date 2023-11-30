import { createAction } from '@reduxjs/toolkit'

const FETCH_CHANGELOG_START = 'FETCH_CHANGELOG_START'
export const fetchChangelogStart = createAction<void>(FETCH_CHANGELOG_START)
