import React from 'react'
import Slider from 'react-slick'
import Footer from '../../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {}
export default function Home({ }: Props) {
  const imgFb = require('../../assets/img/fb.png')
  const imgGg = require('../../assets/img/gg.png')
  const imgNetfix = require('../../assets/img/netfix.png')
  const imgPG = require('../../assets/img/p&g.png')
  const imgPP = require('../../assets/img/paypal.png')
  const Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode:true,
  };
  return (
    <div>
      <div>
        <header className='w-100'>
          <nav className="navbar navbar-expand-sm navbar-light justify-content-between container">
            <div className='d-flex logo'>
              <a className="navbar-brand text-white fw-bolder fs-3" href="#">Fiverr</a>
              <form className=" my-2">
                <input className="form-control" type="text" placeholder="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div className='form'>
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className=" text-white genaral" href="#">Become a Seller</a>
                </li>
                <li className="nav-item">
                  <a className=" text-white genaral" href="#">Sign in</a>
                </li>
                <li className="nav-item">
                  <a className=" text-white rounded" href="#">Join</a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className='carousell'>
          <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-pause="false">
            <div className="carousel-inner" >
              <div className="carousel-item active" data-bs-interval="3000"></div>
              <div className="carousel-item" data-bs-interval="3000"></div>
              <div className="carousel-item" data-bs-interval="3000"></div>
              <div className="carousel-item" data-bs-interval="3000"></div>
              <div className="carousel-item" data-bs-interval="3000"></div>
            </div>
          </div>
          <div className='carousell__content w-100'>
            <div className='container'>
              <div className='w-50'>
                <h2>Find the perfect freelance <br /> services for your business</h2>
                <form className="d-flex my-2">
                  <input className="form-control" type="text" placeholder="Search" />
                  <button className="btn" type="submit">Search</button>
                </form>
                <p>
                  Popular:
                  <span>Website Design</span>
                  <span>WordPress</span>
                  <span>Logo Design</span>
                  <span>Video Editting</span>
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
            <h3>Popular professional services</h3>
            <Slider {...Settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
              <div>
                <h3>7</h3>
              </div>
              <div>
                <h3>8</h3>
              </div>
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}