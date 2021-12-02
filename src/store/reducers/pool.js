import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  networks: [
    {
      id: 1,
      name: 'Compound',
      currentAPY: 5,
      depositedAmount: 100,
    },
    {
      id: 2,
      name: 'Aave',
      currentAPY: 3,
      depositedAmount: 0,
    },
    {
      id: 3,
      name: 'Curve',
      currentAPY: 2.5,
      depositedAmount: 0,
    },
  ],
}

export const poolSlice = createSlice({
  name: 'pool',
  initialState,
  reducers: {
    deposit: (state, { payload }) => {
      state.networks = state.networks.map((network) => {
        if (network.id === payload.id) {
          return {
            ...network,
            depositedAmount: network.depositedAmount + payload.amount,
          }
        }
        return network
      })
    },
    withdraw: (state, { payload }) => {
      state.networks = state.networks.map((network) => {
        if (network.id === payload.id) {
          return {
            ...network,
            depositedAmount: network.depositedAmount - payload.amount,
          }
        }
        return network
      })
    },
  },
})

export const { deposit, withdraw } = poolSlice.actions

export default poolSlice.reducer
