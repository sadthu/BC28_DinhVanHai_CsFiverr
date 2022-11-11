import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { useSearchParams } from 'react-router-dom'
import { http } from '../../util/Setting';
import { getListjod, Typejod } from '../../redux/reducers/ListjodReducer';

type Props = {
}
export default function ListJod({ }: Props) {
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('keyword'))
  const { arrJod } = useSelector((state: RootState) => state.listjodreduces);
  console.log('arjod', arrJod)
  const dispatch: AppDispatch = useDispatch()

  const getJodByKeywordApi = async () => {
    try {
      if (searchParams.get('keyword') !== null) {
        const result = await http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${searchParams.get('keyword')}`);
        dispatch(getListjod(result.data.content))
        let tagH2 = document.querySelector('#errtext') as HTMLElement
        if (result.data.content.length !== 0) {
          tagH2.style.display = 'none'
        } else {
          tagH2.style.display = 'block'
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    // const action = getJodApi();
    // dispatch(action);
    getJodByKeywordApi()

  }, [searchParams.get('keyword')])

  return (
    <div>
      <div className='container listjod'>
        <div className='result'>
          <h1 id='key'>Results for "{searchParams.get('keyword')}"</h1>
          <div className='resultchoose d-flex'>
            <button>
              Category <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              Category <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              Category <i className="fa-solid fa-angle-down"></i>
            </button>
            <button>
              Category <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
        </div>
        <div className='row listjod_wrap'>
          <div id='errtext'>
            <div className='imgerr w-100 d-flex justify-content-center'>
              <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/search_perseus/apps/empty-search-results.229c0d3.png" alt="" />
            </div>
            <div className='content_err d-flex'>
              <h4>No Services Found For Your Search</h4>
              <p>Try a new search or get a free quote for your project from our community of freelancers.</p>
            </div>
          </div>
          {arrJod.map((item: Typejod, index: number) => {
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
      </div>
    </div>
  )
}