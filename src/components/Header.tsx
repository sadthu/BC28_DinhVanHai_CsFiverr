import React from 'react'

type Props = {}

export default function Header({ }: Props) {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary justify-content-between">
        <div className='d-flex'>
          <a className="navbar-brand" href="#">Fiverr</a>
          <form className="d-flex my-2 my-lg-0">
            <input className="form-control me-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
        <div>
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link text-white" href="#" >Become a Seller</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Sign in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Join</a>
            </li>
          </ul>
        </div>
      </nav>


    </div>
  )
}