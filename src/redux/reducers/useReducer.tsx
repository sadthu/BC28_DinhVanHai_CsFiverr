import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/Setting';
import { AppDispatch } from '../configStore';
import {history} from '../../index'

export interface accUser {
    email: string;
    password: string;
};

const initialState = {
    userLogin: getStoreJSON(USER_LOGIN)
};

export const useReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setUserLogin: (state, action: PayloadAction<accUser>) => {
            let userLogin = action.payload;
            state.userLogin = userLogin;
        }
    }
});

export const { setUserLogin } = useReducer.actions
export default useReducer.reducer

export const singinApi = (userLogin: accUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            let result = await http.post('/auth/signin', userLogin);
            setStore(ACCESS_TOKEN, result.data.content.token);
            setCookie(result.data.content.token, 30, ACCESS_TOKEN);
            setStoreJSON(USER_LOGIN, result.data.content)
            const acction = setUserLogin(result.data.content);
            dispatch(acction);
            console.log('userlogin',result.data.content)
            history.push('/home')
        }
        catch (err) {
            console.log(err)
            alert('sai thông tin!')
            // history.push('/singin')
            window.location.href = '/join'
        }
    }
}


export const getProfileApi = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const result = await http.post('/users');
            const acction = setUserLogin(result.data.content)
            dispatch(acction)
            
        }catch(err){
            alert('Đăng nhập để vào trang này !');
            history.push('/join');
            console.log({err})
        }
    }
}
