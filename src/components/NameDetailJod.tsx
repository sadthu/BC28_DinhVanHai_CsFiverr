import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/configStore'
import { getListjod, Typejod } from '../redux/reducers/ListjodReducer';

type Props = {}

export default function NameDetailJod({ }: Props) {
    const { arrJod } = useSelector((state: RootState) => state.listjodreduces)

    return (
        <div className='row listjod_wrap'>
            {arrJod?.map((item: Typejod, index: number) => {
                return <div className='col-12 col-xl-3 col-lg-4 col-sm-6 listjod-item' key={index}>
                    <div className='listjod_wrap-item'>
                        <div className='img'>
                            <img src={item.congViec.hinhAnh} alt="" />
                        </div>
                        <div className='text'>
                            <div className='user d-flex'>
                                <img src={item.avatar} alt="" />
                                <div className='user_text'>
                                    <a href="#">{item.tenNguoiTao}</a>
                                    <p>lv2 seller</p>
                                </div>
                            </div>
                            <a href="#">{item.congViec.tenCongViec}</a>
                            <div className='vote'>
                                <i className="fa-solid fa-star"></i> 5.0 <span>({item.congViec.danhGia})</span>
                            </div>
                        </div>
                        <div className='price d-flex'>
                            <div className='like'>
                                <i className="fa-solid fa-heart"></i>
                            </div>
                            <div className='buy'>
                                staring at <span>${item.congViec.giaTien}</span>
                            </div>
                        </div>
                    </div>
                </div>
            })}

        </div>
    )
}