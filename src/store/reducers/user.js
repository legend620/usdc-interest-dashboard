import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  balance: 1000,
  interestDays: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload
    },
    setInterestDays: (state, action) => {
      state.interestDays = action.payload
    },
  },
})

export const { setBalance, setInterestDays } = userSlice.actions

export default userSlice.reducer
