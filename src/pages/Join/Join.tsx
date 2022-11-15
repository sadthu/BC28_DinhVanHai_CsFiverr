import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { singinApi } from "../../redux/reducers/useReducer";
import { AppDispatch } from "../../redux/configStore";

type Props = {};

export default function Join({}: Props) {
  const dispatch:AppDispatch = useDispatch()
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
    },
    validationSchema:Yup.object().shape({
        email: Yup.string().required('Email không được bỏ trống !').email('Email không đúng định dạng!'),
        password: Yup.string().required('Password không được bỏ trống !').min(3,'password từ 3 - 32 ký tự!').max(32,'password từ 3 đến 32 ký tự!'),
    })
    ,
    onSubmit: (values)=>{
      const action = singinApi(values);
      dispatch(action);
        
    }
  }); 
  return (
    <div className='singin login'>
      <div className="container">
        <a href="/"><i className="fa-solid fa-angle-left"></i></a>
        <form onSubmit={formik.handleSubmit}>
          <h3>ĐĂNG NHẬP</h3>
          <label><b>Email</b></label><br />
          <input type="text" placeholder="Email" name="email" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br />
          <span>{formik.errors.email ? <p className='text text-danger'>{formik.errors.email}</p> : ''}</span>
          <label><b>Mật Khẩu</b></label><br />
          <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} /><br />
          <span>{formik.errors.password ? <p className='text text-danger'>{formik.errors.password}</p> : ''}</span>
          <div className="clearfix1 general ">
            <button type="submit" >Đăng Nhập</button>
          </div>
        </form>
      </div>

    </div>
  );
}
