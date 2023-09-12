import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'src/redux/store'

const selectSettingsSliceReducer = (state: RootState) => state.settings

export const selectMode = createSelector(
  [selectSettingsSliceReducer],
  (state) => state.mode
)
