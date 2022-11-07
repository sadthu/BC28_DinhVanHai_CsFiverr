import { configureStore } from '@reduxjs/toolkit'
import ListjodReducer from './reducers/ListjodReducer'
import useReducer from './reducers/useReducer'

export const store = configureStore({
  reducer: {
    listjodreduces:ListjodReducer,
    userReduce:useReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch