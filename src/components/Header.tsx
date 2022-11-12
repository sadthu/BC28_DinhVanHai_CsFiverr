import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/configStore'
import { ACCESS_TOKEN, clearCookie, clearLocalStorage, USER_LOGIN } from '../util/Setting'
import { getMenuJodApi, TypeMenu, ArrGrDetail, ArrDetail } from '../redux/reducers/listMenuReducer';
type Props = {}

export default function Header({ }: Props) {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { arrMenuJod } = useSelector((state: RootState) => state.listmenureducer);
  const { userLogin } = useSelector((state: RootState) => state.userReduce);
  const renderNavlink = () => {
    if (userLogin) {
      return <>
        <li>
          <NavLink className="rounded genaral" to="/homeTemplate/profile">
            {userLogin.user.name}
          </NavLink>
        </li>
        <li>
          <a href="#" className="rounded" style={{ cursor: 'pointer' }} onClick={() => {
            clearLocalStorage(USER_LOGIN);
            clearLocalStorage(ACCESS_TOKEN);
            clearCookie(ACCESS_TOKEN);
            //f5 trang
            window.location.reload();
          }}>Đăng xuất</a>
        </li>
      </>
    }
    return <li className="nav-item">
      <NavLink className="rounded" to="/join">Join</NavLink>
    </li>
  };

  useEffect(() => {
    const action = getMenuJodApi();
    dispatch(action)
  }, [])
  return (
    <div className='header_template'>
      <div className=' container'>
        <div className='w-100 header_template-content'>
          <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
            <div className='logo justify-content-between'>
              <NavLink className="fw-bolder fs-3" to="/">Fiverr</NavLink>
              <form className="d-flex my-2" onSubmit={(e) => {
                e.preventDefault();
                const key = document.querySelector('#keyword') as HTMLInputElement;
                navigate(`/hometemplate/listjod?keyword=${key.value}`)
              }}>
                <input id='keyword' className="" type="text" placeholder="Search" />
                <button className="" type="submit">Search</button>
              </form>
            </div>

            <div className='form'>
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="genaral" href="#">Become a Seller</a>
                </li>
                <li className="nav-item">
                  <NavLink className="genaral" to="/singin">Sign in</NavLink>
                </li>
                {renderNavlink()}
              </ul>
            </div>
          </nav>
        </div>
        <div className='listjodmenu'>
          <ul className='d-flex justify-content-between'>
            {arrMenuJod.map((item: TypeMenu, index: number) => {
              let dsNhom = item.dsNhomChiTietLoai;
              return <li key={index}>
                <a href="#" className='namejod' onClick={(e) => {
                  e.preventDefault()
                  navigate(`/hometemplate/Typejod?keyword=${item.id}`)
                }}>{item.tenLoaiCongViec}</a>
                <div className='modal_hover'>
                  <ul className='ul-wrap'>
                    {dsNhom.map((item: ArrGrDetail, index: number) => {
                      return <li key={index}>
                        <p className='nameGr'>{item.tenNhom}</p>
                        <ul className='list-detail'>
                          {item.dsChiTietLoai.map((item: ArrDetail, index: number) => {
                            return <li key={index}>
                              <a href="#" className='nameDetail' onClick={(e) => {
                                e.preventDefault()
                                navigate(`/hometemplate/listjod?key=${item.id}`)
                              }}>{item.tenChiTiet}</a>
                            </li>
                          })}
                        </ul>
                      </li>
                    })}
                  </ul>
                </div>
              </li>
            })}

          </ul>
        </div>
      </div>
    </div>
  )
}