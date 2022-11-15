
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { singupApi } from '../../redux/reducers/formSinginReducer';
import { AppDispatch } from "../../redux/configStore";
import { useDispatch } from "react-redux";

type Props = {}

export default function SingIn({ }: Props) {
  const dispatch: AppDispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      birthday: '',
      name: '',
      phone: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
      password: Yup.string().required('Password không được bỏ trống !').min(3, 'password từ 3 - 32 ký tự!').max(32, 'password từ 3 đến 32 ký tự!'),
      birthday: Yup.string().required('Không được bỏ trống !'),
      name: Yup.string().required('Accout không được bỏ trống !').max(12, 'Name không vượt quá 12 ký tự!'),
      phone: Yup.string().required('Phone không được bỏ trống !')
    })
    ,
    onSubmit: (values) => {
      console.log(values)
      const action = singupApi(values);
      dispatch(action)

    }
  });
  return (
    <div className='singin'>
      <div className="container">
        <a href="/"><i className="fa-solid fa-angle-left"></i></a>

        <form onSubmit={formik.handleSubmit}>
          <h3>ĐĂNG KÝ</h3>
          <label htmlFor="TK"><b>Tài khoản</b></label><br />
          <input type="text" placeholder="Nhập Tên Tài Khoản" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.name ? <p className='text text-danger'>{formik.errors.name}</p> : ''}</span>
          <label htmlFor="psw"><b>Mật Khẩu</b></label><br />
          <input type="password" placeholder="Nhập Mật Khẩu" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}</span>
          <label htmlFor="psw-repeat"><b>Ngày Sinh</b></label><br />
          <input type="text" placeholder="Nhập Ngày Sinh" name="birthday" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.birthday ? <p className='text text-danger'>{formik.errors.birthday}</p> : ''}</span>
          <label htmlFor="email"><b>Email</b></label><br />
          <input type="text" placeholder="Nhập Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}</span>
          <label htmlFor="tel"><b>Số Điện Thoại</b></label> <br />
          <input type="tel" placeholder="Nhập Số Điện Thoại" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.phone ? <p className='text text-danger'>{formik.errors.phone}</p> : ''}</span>
          <div className="clearfix1 general ">
            <button type="submit" >Đăng Ký</button>
          </div>
        </form>
      </div>

    </div>

  )
}