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
  const imgAnimate = require('../../assets/img/animated-explainer-2x.webp')
  const imgBook = require('../../assets/img/book-covers-2x.webp')
  const imgDta = require('../../assets/img/data-entry-2x.webp')
  const imgIlus = require('../../assets/img/illustration-2x.webp')
  const imgLogo = require('../../assets/img/logo-design.webp')
  const imgSeo = require('../../assets/img/seo-2x.webp')
  const imgSocial = require('../../assets/img/social-2x.webp')
  const imgtrans = require('../../assets/img/translation-2x.webp')
  const imgVoice = require('../../assets/img/voiceover-2x.webp')
  const imgWordpress = require('../../assets/img/wordpress-2x.webp')

  const Settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
              <div className='slider-genaral'>
                <div>
                  <img src={imgAnimate} alt="" className='w-100 h-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgBook} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgDta} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgIlus} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgLogo} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgSeo} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgSocial} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgtrans} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgVoice} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div>
                  <img src={imgWordpress} alt="" className='w-100' />
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}