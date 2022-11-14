import { configureStore } from '@reduxjs/toolkit'
import cpnTypeJod from './reducers/cpnTypeJod'
import formSinginReducer from './reducers/formSinginReducer'
import ListjodReducer from './reducers/ListjodReducer'
import listMenuReducer from './reducers/listMenuReducer'
import useReducer from './reducers/useReducer'

export const store = configureStore({
  reducer: {
    listjodreduces:ListjodReducer,
    userReduce:useReducer,
    userinfor:formSinginReducer,
    listmenureducer:listMenuReducer,
    cpmtypejod:cpnTypeJod,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch