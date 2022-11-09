import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ACCESS_TOKEN, clearCookie, clearLocalStorage, USER_LOGIN } from '../util/Setting'
type Props = {}

export default function Header({ }: Props) {
  const { userLogin } = useSelector((state: any) => state.userReduce);
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
  }
  return (
    <div className='header_template container'>
      <div className='w-100 header_template-content'>
        <nav className="navbar navbar-expand-sm navbar-light justify-content-between">
          <div className='logo justify-content-between'>
            <a className="fw-bolder fs-3" href="#">Fiverr</a>
            <form className="d-flex my-2">
              <input className="" type="text" placeholder="Search" />
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
    </div>
  )
}