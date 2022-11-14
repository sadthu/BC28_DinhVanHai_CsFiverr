import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
