import { createSlice,PayloadAction } from '@reduxjs/toolkit'
import { Action } from '@remix-run/router';
import { http } from '../../util/Setting';
import { AppDispatch } from '../configStore';

export interface userInfor {
    name:          string;
    email:         string;
    password:      string;
    phone:         string;
    birthday:      string;
}

const initialState = {
    userInfor: {}
}

const formSinginReducer = createSlice({
  name: 'fromsinginreducer',
  initialState,
  reducers: {
    setUserInfor: (state,action:PayloadAction<userInfor>) => {
        state.userInfor = action.payload
    }
  }
});

export const {setUserInfor} = formSinginReducer.actions

export default formSinginReducer.reducer

export const singupApi = (userInfor:userInfor) => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await http.post('/auth/signup',userInfor);
            const acction = setUserInfor(result.data.content);
            dispatch(acction);
        }
        catch (err) {
            console.log(err)
        }
    }
}