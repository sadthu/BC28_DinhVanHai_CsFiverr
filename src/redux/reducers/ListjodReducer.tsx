import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/Setting';
import { AppDispatch } from '../configStore';

export interface Typejod {
    id:                 number;
    congViec:           Jod;
    tenLoaiCongViec:    string;
    tenNhomChiTietLoai: string;
    tenChiTietLoai:     string;
    tenNguoiTao:        string;
    avatar:             string;
}

export interface Jod {
    id:                    number;
    tenCongViec:           string;
    danhGia:               number;
    giaTien:               number;
    nguoiTao:              number;
    hinhAnh:               string;
    moTa:                  string;
    maChiTietLoaiCongViec: number;
    moTaNgan:              string;
    saoCongViec:           number;
}

export interface JodState {
    arrJod:Typejod[]
}

const initialState:JodState = {
    arrJod:[]
}

const ListjodReducer = createSlice({
  name: "listjodreduces",
  initialState,
  reducers: {
    getListjod: (state:JodState,action:PayloadAction<Typejod[]>) => {
        state.arrJod = action.payload
    }
  }
});
export const {getListjod} = ListjodReducer.actions
export default ListjodReducer.reducer

export const getJodApi = () => {
    return async (dispatch:AppDispatch) => {
        try {
            const result = await http.get('/cong-viec/lay-danh-sach-cong-viec-theo-ten/design');
            const acction = getListjod(result.data.content);
            dispatch(acction);
        }
        catch(err) {
            console.log(err)
        }
    }
}