import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {getStoreJSON} from '../../util/Setting'

export interface NameTypeJod {
    id:                 number;
    tenLoaiCongViec:  string;
    dsNhomChiTietLoai:ArrGrDetail[];
}

export interface ArrGrDetail {
    id: number;
    tenNhom:string;
    hinhAnh:string;
    maLoaiCongviec:number;
    dsChiTietLoai:ArrDetail[];
}

export interface ArrDetail {
    id:number;
    tenChiTiet:string;
}

export interface NameJodState {
    arrTypeJod:NameTypeJod[]
}

const initialState:NameJodState = {
    arrTypeJod:getStoreJSON('listJod')
}

const cpnTypeJod = createSlice({
  name: 'cpmtypejod',
  initialState,
  reducers: {
    getNameTypeJod: (state:NameJodState,action:PayloadAction<NameTypeJod[]>) => {
        state.arrTypeJod = action.payload
    }
  }
});

export const {getNameTypeJod} = cpnTypeJod.actions

export default cpnTypeJod.reducer