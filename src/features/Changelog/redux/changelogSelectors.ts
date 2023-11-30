import { createSelector } from '@reduxjs/toolkit'

const selectChangelogReducer = (state: any) => state.changelogs

export const selectChangelogs = createSelector(
  [selectChangelogReducer],
  (state) => state.changelogs
)
