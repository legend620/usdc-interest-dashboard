import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 1000,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload
    },
  },
})

export const { setBalance } = userSlice.actions

export default userSlice.reducer
