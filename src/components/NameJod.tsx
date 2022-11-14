import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/configStore';
import { ArrDetail, ArrGrDetail } from '../redux/reducers/cpnTypeJod';

type Props = {}

export default function NameJod({ }: Props) {
    const { arrTypeJod } = useSelector((state: RootState) => state.cpmtypejod)
    // console.log({ arrTypeJod })
    const listGr = arrTypeJod[0]?.dsNhomChiTietLoai

    const navigate = useNavigate()
    return (

        <div className='namejod'>
            <div className='namejod_list'>
                {listGr.map((item: ArrGrDetail, index: number) => {
                    return <div className='namejod-item' key={index}>
                        <div className='namejod_img'>
                            <img src={item.hinhAnh} alt="" />
                        </div>
                        <div className='namejod_text'>
                            <h5>{item.tenNhom}</h5>
                            <ul>
                                {item.dsChiTietLoai.map((item: ArrDetail, index:number) => {
                                    return <>
                                        <li key={index}><a href="#" onClick={(e) => {
                                            e.preventDefault()
                                            navigate(`/hometemplate/typejod?key=${item.id}`)
                                        }}>{item.tenChiTiet}</a></li>
                                    </>
                                })}
                            </ul>
                        </div>
                    </div>

                })}
            </div>

        </div>


    )
}