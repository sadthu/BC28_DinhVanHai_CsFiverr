import { configureStore } from '@reduxjs/toolkit'
import ListjodReducer from './reducers/ListjodReducer'

export const store = configureStore({
  reducer: {
    listjodreduces:ListjodReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch