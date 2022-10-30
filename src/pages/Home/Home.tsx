import React from 'react'
// import '../../assets/scss/home.scss'
import Footer from '../../components/Footer'

type Props = {}
export default function Home({ }: Props) {
  const imgFb = require('../../assets/img/fb.png')
  const imgGg = require('../../assets/img/gg.png')
  const imgNetfix = require('../../assets/img/netfix.png')
  const imgPG = require('../../assets/img/p&g.png')
  const imgPP = require('../../assets/img/paypal.png')
  return (
    <div>
      <div>
        <header className='w-100'>
          <nav className="navbar navbar-expand-sm navbar-light justify-content-between container">
            <div className='d-flex'>
              <a className="navbar-brand text-white" href="#">Fiverr</a>
              <form className="d-flex my-2 my-lg-0">
                <input className="form-control me-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
            <div>
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">Become a Seller</a>
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
        </header>
        <section className='carousell'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel slide carousel-fade" data-bs-interval="500">
              <div className="carousel-item active" data-bs-pause="false">
                <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/hinh-anh-dep-hoa-bo-cong-anh.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-pause="false">
                <img src="https://file1.dangcongsan.vn/DATA/0/2018/10/68___gi%E1%BA%BFng_l%C3%A0ng_qu%E1%BA%A3ng_ph%C3%BA_c%E1%BA%A7u__%E1%BB%A9ng_h%C3%B2a___%E1%BA%A3nh_vi%E1%BA%BFt_m%E1%BA%A1nh-16_51_07_908.jpg" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-pause="false">
                <img src="https://kynguyenlamdep.com/wp-content/uploads/2020/01/bo-cong-anh.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <div className='carousell__content w-100'>
            <div className='container'>
              <div className='w-50'>
                <h2>Find the perfect freelance <br /> services for your business</h2>
                <form className="d-flex my-2 my-lg-0">
                  <input className="form-control me-sm-2 w-40" type="text" placeholder="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <p>
                  Popular:
                  <span>Website Design</span>
                  <span>Website Design</span>
                  <span>Website Design</span>
                  <span>Website Design</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='link bg-light'>
          <span>Trusted by:</span>
          <img src={imgFb} alt="..." />
          <img src={imgGg} alt="..." />
          <img src={imgNetfix} alt="..." />
          <img src={imgPG} alt="..." />
          <img src={imgPP} alt="..." />
        </section>
        <section className='services'>
          <div className='container'>
            
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}