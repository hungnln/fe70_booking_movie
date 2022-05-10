import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { useFormik } from "formik";
import { values } from 'lodash';
import { loginAction } from '../../redux/actions/UserManageAction';
import { ACCESSTOKEN } from '../../util/setting';
import { history } from '../../App';
export default function Login(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector(rootReducer => rootReducer.UserManageReducer)
  const loginForm = useFormik({
    initialValues: {
      taikhoan: "",
      matkhau: ""
    },
    onSubmit: values => {
      console.log('testLogin', values);
      const action = loginAction(values);
      dispatch(action);
    }
  })
  if (localStorage.getItem(ACCESSTOKEN) !== null) {
    history.push('/home')
  }
  return (
    <section className="h-full gradient-form  md:h-screen">
      <div className="container h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="xl:w-10/12">
            <div className="block bg-white shadow-lg rounded-lg">
              <div className="lg:flex lg:flex-wrap g-0">
                <div className="lg:w-6/12 px-4 md:px-0">
                  <div className="md:p-12 md:mx-6">
                    <div className="text-center">
                      <img className="mx-auto w-48" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" alt="logo" />
                      <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">We are The Lotus Team</h4>
                    </div>
                    <form onSubmit={loginForm.handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      <div className="mb-4">
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="taikhoan" placeholder="Username" onChange={loginForm.handleChange}
                          onBlur={loginForm.handleBlur}
                          value={loginForm.values.taikhoan} />
                      </div>
                      <div className="mb-4">
                        <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="matkhau" placeholder="Password" onChange={loginForm.handleChange}
                          onBlur={loginForm.handleBlur}
                          value={loginForm.values.matkhau} />
                      </div>
                      <div className="text-center pt-1 mb-12 pb-1">
                        <button className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="submit" data-mdb-ripple="true" data-mdb-ripple-color="light" style={{
                          background: 'linear-gradient( to right,#ee7724, #d8363a,#dd3675, #b44593)'
                        }}>
                          Log in
                        </button>
                        <a className="text-gray-500" href="#!">Forgot password?</a>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <NavLink to={'/register'}>Sign Up</NavLink>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none" style={{ background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' }}>
                  <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                    <h4 className="text-xl font-semibold mb-6">We are more than just a company</h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </section >

  )
}
