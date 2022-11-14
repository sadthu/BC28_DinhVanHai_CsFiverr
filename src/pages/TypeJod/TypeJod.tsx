import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Slider from 'react-slick';
import { http } from '../../util/Setting';
import { getNameTypeJod } from '../../redux/reducers/cpnTypeJod';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import NameJod from '../../components/NameJod';
import { getListjod } from '../../redux/reducers/ListjodReducer';
import NameDetailJod from '../../components/NameDetailJod';
import RenderCompunent from '../../components/RenderCompunent';
import {setStoreJSON} from '../../util/Setting'

type Props = {}

export default function TypeJod({ }: Props) {

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 4,
    variableWidth: true
  };

  const { arrTypeJod } = useSelector((state: RootState) => state.cpmtypejod)

  console.log({arrTypeJod})
  const dispatch: AppDispatch = useDispatch()

  const [searchParam, setsearchParams] = useSearchParams()
  console.log(searchParam.get('keyword'))
  const getJodApi = async () => {
    try {
      if (searchParam.get('keyword') !== null) {
        const result = await http.get(`/cong-viec/lay-chi-tiet-loai-cong-viec/${searchParam.get('keyword')}`);
        setStoreJSON('listJod', result.data.content)
       
        dispatch(getNameTypeJod(result.data.content))
        console.log('sdgdgdsg',result.data.content)
      }
    } catch (err) {
      console.log('sfsafassf',err);
      
    }
  }

  const getJodDetailApi = async () => {
    try {
      if (searchParam.get('key') !== null) {
        const result = await http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${searchParam.get('key')}`);
        dispatch(getListjod(result.data.content))
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getJodApi()
  }, [searchParam.get('keyword')])

  useEffect(() => {
    getJodDetailApi()
  }, [searchParam.get('key')])

  return (
    <div>
      <div className='container typejod'>
        <div className='slider'>
          <div className='slider_img'>
            <h3 className='title'>{arrTypeJod[0]?.tenLoaiCongViec}</h3>
            <p className='text'>Designs to make you stand out.</p>
            <button className='slider-btn'>
              <i className="fa-sharp fa-solid fa-circle-play"></i>
              How Fiverr Works
            </button>
          </div>
          <div className='slider_popular'>
            <h4 className='popular-title'>Most popular in {arrTypeJod[0]?.tenLoaiCongViec}</h4>
            <Slider {...settings}>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png" alt="" />
                  <span>Minimalist Logo Design</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png" alt="" />
                  <span>Architecture & Interior Design</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png" alt="" />
                  <span>Image Editing</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png" alt="" />
                  <span>NFT Art</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png" alt="" />
                  <span>T-Shirts & Merchandise</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101633/Illustration_2x.png" alt="" />
                  <span>Illustration</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/e72f248973b8a6b99a5786e63b6a3b1c-1630333285646/Resume%20Writing.png" alt="" />
                  <span>Business Cards Design</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101621/Social%20Media%20Design_2x.png" alt="" />
                  <span>Social Media Design</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className='slider-wrap'>
                <a href="#" className='d-flex popular-item'>
                  <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101632/Graphics%20for%20Streamers_2x.png" alt="" />
                  <span>Graphics for Streamers</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>

            </Slider>
          </div>
        </div>

        <h4 className='explore'>{arrTypeJod[0]?.tenLoaiCongViec}</h4>

        <div className='content'>
          <RenderCompunent Component={NameJod}/>
        </div>

        <div className='typejod_services'>
          <h4 className='services-title'>Most popular in Graphics & Design</h4>
          <ul className='services-list'>
            <span><a href="#">Minimalist logo design</a></span>
            <span><a href="#">Signature logo design</a></span>
            <span><a href="#">Mascot logo design</a></span>
            <span><a href="#">3d logo design</a></span>
            <span><a href="#">Hand drawn logo design</a></span>
            <span><a href="#">Vintage logo design</a></span>
            <span><a href="#">Remove background</a></span>
            <span><a href="#">Photo restoration</a></span>
            <span><a href="#">Photo retouching</a></span>
            <span><a href="#">Image resize</a></span>
            <span><a href="#">Product label design</a></span>
            <span><a href="#">Custom twitch overlay</a></span>
            <span><a href="#">Custom twitch emotes</a></span>
            <span><a href="#">Gaming logo</a></span>
            <span><a href="#">Children book illustration</a></span>
            <span><a href="#">Instagram design</a></span>
            <span><a href="#">Movie poster design</a></span>
            <span><a href="#">Box design</a></span>
            <span><a href="#">Logo maker</a></span>
            <span><a href="#">Logo ideas</a></span>
          </ul>
        </div>
      </div>

    </div>
  )
}