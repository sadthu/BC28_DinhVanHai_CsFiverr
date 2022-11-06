import React from 'react'
import Slider from 'react-slick'
import Footer from '../../components/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

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
  const imgSelling = require('../../assets/img/selling-proposition-still-1400-x1.webp')
  const imgTes1 = require('../../assets/img/testimonial-video-still-haerfest.webp')
  const imgTes2 = require('../../assets/img/testimonial-video-still-lavender.webp')
  const imgTes3 = require('../../assets/img/testimonial-video-still-naadam.webp')
  const imgTes4 = require('../../assets/img/testimonial-video-still-rooted.webp')

  const settingServices = {
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

  const SettingTestimonial = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const changeHandle = () => {
    let video = document.querySelector('video') as HTMLMediaElement
    video.muted = true;
  }

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
                  <NavLink className=" text-white genaral" to="/singin">Sign in</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className=" text-white rounded" to="/join">Join</NavLink>
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
                  <div>
                  Popular:
                  </div>
                  
                  <div>
                  <span>Website Design</span>
                  <span>WordPress</span>
                  <span>Logo Design</span>
                  <span>Video Editting</span>
                  </div>
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
            <Slider {...settingServices}>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Engage your audience</small> <br /> Video Explainer</h4>
                  <img src={imgAnimate} alt="" className='w-100 h-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Showcase your story</small> <br /> Book Covers </h4>
                  <img src={imgBook} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Learn you business</small> <br /> Data Entry </h4>
                  <img src={imgDta} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Color your dreams</small> <br /> Illustration </h4>
                  <img src={imgIlus} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Build your brand</small> <br /> Logo Design </h4>
                  <img src={imgLogo} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Unlock growth online</small> <br /> SEO </h4>
                  <img src={imgSeo} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Read more custumers</small> <br /> Social Media </h4>
                  <img src={imgSocial} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Go global</small> <br /> Translation </h4>
                  <img src={imgtrans} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Share your message</small> <br /> Voice Over </h4>
                  <img src={imgVoice} alt="" className='w-100' />
                </div>
              </div>
              <div className='slider-genaral'>
                <div className='service-item'>
                  <h4><small>Customize your size</small> <br /> WordPress </h4>
                  <img src={imgWordpress} alt="" className='w-100' />
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className='introduce'>
          <div className='container'>
            <div className='row'>
              <div className='col-6 introduce-text'>
                <h3>A whole world of freelance talent at your fingertips</h3>
                <div>
                  <p>
                    <i className="fa-regular fa-circle-check"></i>
                    The best for every budget
                  </p>
                  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                </div>
                <div>
                  <p>
                    <i className="fa-regular fa-circle-check"></i>
                    The best for every budget
                  </p>
                  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                </div>
                <div>
                  <p>
                    <i className="fa-regular fa-circle-check"></i>
                    The best for every budget
                  </p>
                  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                </div>
                <div>
                  <p>
                    <i className="fa-regular fa-circle-check"></i>
                    The best for every budget
                  </p>
                  <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                </div>

              </div>
              <div className='col-6 introduce-img'>
                <img src={imgSelling} alt="" className='w-100' />
                <button className='Btn-play' data-bs-toggle="modal" data-bs-target="#exampleModal"></button>
              </div>
            </div>
          </div>
        </section>
        <section className='testimonial'>
          <div className='container'>
            <Slider {...SettingTestimonial}>
              <div className='testimonial-item'>
                <div className='img'>
                  <img src={imgTes1} alt="" />
                </div>
                <div className='text'>
                  <p>
                    Tim and Dan Joo, Co-Founders
                    <span>
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png" alt="" />
                    </span>
                  </p>
                  <p>
                    "When you want to create a business bigger than yourself, you need a lot of help. That's what Fiverr does."
                  </p>
                </div>
              </div>
              <div className='testimonial-item'>
                <div className='img'>
                  <img src={imgTes4} alt="" />
                </div>
                <div className='text'>
                  <p>
                    Kay Kim, Co-Founder
                    <span>
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png" alt="" />
                    </span>

                  </p>
                  <p>
                    "It's extremely exciting that Fiverr has freelancers from all over the world — it broadens the talent pool. One of the best things about Fiverr is that while we're sleeping, someone's working."
                  </p>
                </div>
              </div>
              <div className='testimonial-item'>
                <div className='img'>
                  <img src={imgTes2} alt="" />
                </div>
                <div className='text'>
                  <p>
                    Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                    <span>
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png" alt="" />
                    </span>
                  </p>
                  <p>
                    "We used Fiverr for SEO, our logo, website, copy, animated videos — literally everything. It was like working with a human right next to you versus being across the world."
                  </p>
                </div>
              </div>
              <div className='testimonial-item'>
                <div className='img'>
                  <img src={imgTes3} alt="" />
                </div>
                <div className='text'>
                  <p>
                    Caitlin Tormey, Chief Commercial Officer
                    <span>
                      <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png" alt="" />
                    </span>
                  </p>
                  <p>
                    "We've used Fiverr for Shopify web development, graphic design, and backend web development. Working with Fiverr makes my job a little easier every day."
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
        <section className='marketplace'>
          <div className='container'>
            <h3>Explore the marketplace</h3>
            <div className='marketplace-content'>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg" alt="" />
                Graphics & Design
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg" alt="" />
                Digital Marketing
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg" alt="" />
                Writing & Translation
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg" alt="" />
                Video & Animation
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg" alt="" />
                Music & Audio
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg" alt="" />
                Programming & Tech
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg" alt="" />
                Business
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg" alt="" />
                Lifestyle
              </a>
              <a href="#">
                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg" alt="" />
                Data
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" onClick={changeHandle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <video controls>
              <source src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}