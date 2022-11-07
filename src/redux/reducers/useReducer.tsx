import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ACCESS_TOKEN, getStoreJSON, http, setCookie, setStore, setStoreJSON, USER_LOGIN } from '../../util/Setting';
import { AppDispatch } from '../configStore';

export interface accUser {
    email: string;
    password: string;
};

export interface useState {
    userLogin: accUser
}

const initialState:useState = {
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
            setStore(ACCESS_TOKEN, result.data.content.accessToken);
            setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);
            setStoreJSON(USER_LOGIN, result.data.content)
            const acction = setUserLogin(result.data.content);
            dispatch(acction);
        }
        catch (err) {
            console.log(err)
        }
    }
}
