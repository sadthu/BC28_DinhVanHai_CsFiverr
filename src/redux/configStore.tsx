import { configureStore } from '@reduxjs/toolkit'
import formSinginReducer from './reducers/formSinginReducer'
import ListjodReducer from './reducers/ListjodReducer'
import useReducer from './reducers/useReducer'

export const store = configureStore({
  reducer: {
    listjodreduces:ListjodReducer,
    userReduce:useReducer,
    userinfor:formSinginReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch