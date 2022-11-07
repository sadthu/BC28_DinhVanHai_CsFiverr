
import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

type Props = {}

export default function SingIn({ }: Props) {
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      repassword:'',
      accont:'',
      phone:'',


    },
    validationSchema:Yup.object().shape({
        email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
        password: Yup.string().required('Password không được bỏ trống !').min(3,'password từ 3 - 32 ký tự!').max(32,'password từ 3 đến 32 ký tự!'),
        repassword: Yup.string().required('Không được bỏ trống !').min(3,'password từ 3 - 32 ký tự!').max(32,'password từ 3 đến 32 ký tự!'),
        accont: Yup.string().required('Accout không được bỏ trống !'),
        phone: Yup.string().required('Phone không được bỏ trống !')
    })
    ,
    onSubmit: (values)=>{
        // console.log(values)
        
    }
});
  return (
    <div className='singin'>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <h3>ĐĂNG KÝ</h3>
          <label htmlFor="TK"><b>Tài khoản</b></label><br />
          <input type="text" placeholder="Nhập Tên Tài Khoản" name="accont" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
          <span>{formik.errors.accont ? <p className='text text-danger'>{formik.errors.accont}</p> : ''}</span>
          <label htmlFor="psw"><b>Mật Khẩu</b></label><br />
          <input type="password" placeholder="Nhập Mật Khẩu" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}</span>
          <label htmlFor="psw-repeat"><b>Nhập Lại Mật Khẩu</b></label><br />
          <input type="password" placeholder="Nhập Lại Mật Khẩu" name="repassword" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br />
          <span>{formik.errors.repassword ? <p className='text text-danger'>{formik.errors.repassword}</p> : ''}</span>
          <label htmlFor="email"><b>Email</b></label><br />
          <input type="text" placeholder="Nhập Email" name="email" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br />
          <span>{formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}</span>
          <label htmlFor="tel"><b>Số Điện Thoại</b></label> <br />
          <input type="tel" placeholder="Nhập Số Điện Thoại" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
          <span>{formik.errors.phone ? <p className='text text-danger'>{formik.errors.phone}</p> : ''}</span>
          <div className="clearfix1 general ">
            <button type="submit" >Đăng Ký</button>
          </div>
        </form>
      </div>

    </div>

  )
}