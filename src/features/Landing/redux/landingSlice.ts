import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'

// Slice
const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setGithubRepos: (state, { payload }: PayloadAction<any[]>) => {
      state.githubRepos = payload
    },
  },
})

export const { setGithubRepos } = landingSlice.actions

export default landingSlice.reducer
