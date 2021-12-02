import { configureStore } from '@reduxjs/toolkit'

import userReducer from './reducers/user'
import poolReducer from './reducers/pool'

export const store = configureStore({
  reducer: {
    user: userReducer,
    pool: poolReducer,
  },
})
