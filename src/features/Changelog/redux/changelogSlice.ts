import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

// Slice
const changelogSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setChangelogs: (state, { payload }: PayloadAction<any[]>) => {
      state.changelogs = payload
    },
  },
})

export const { setChangelogs } = changelogSlice.actions

export default changelogSlice.reducer
