import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { string } from 'yup/lib/locale';
import { AppDispatch } from '../configStore';
import { http } from '../../util/Setting';
export interface TypeMenu {
    id:                 number;
    tenLoaiCongViec:  string;
    dsNhomChiTietLoai:ArrGrDetail;
}

export interface ArrGrDetail {
    id: number;
    tenNhom:string;
    hinhAnh:string;
    maLoaiCongviec:number;
    dsChiTietLoai:ArrDetail
}

export interface ArrDetail {
    id:number;
    tenChiTiet:string;
}

export interface MenuState {
    arrMenuJod:TypeMenu[]
}

const initialState:MenuState = {
    arrMenuJod:[]
}

const listMenuReducer = createSlice({
  name: 'listmenureducer',
  initialState,
  reducers: {
    getMenuJod: (state:MenuState,action:PayloadAction<TypeMenu[]>) => {
        state.arrMenuJod = action.payload
    }
  }
});

export const {getMenuJod} = listMenuReducer.actions

export default listMenuReducer.reducer

export const getMenuJodApi = () => {
    return async (dispatch:AppDispatch) => {
        try {
            const result = await http.get('/cong-viec/lay-menu-loai-cong-viec');
            const acction = getMenuJod(result.data.content);
            dispatch(acction);
        }
        catch(err) {
            console.log(err)
        }
    }
}
