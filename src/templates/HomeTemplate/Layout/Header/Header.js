import React, { Component, Fragment, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieBannersAction } from '../../../../redux/actions/MovieManageAction';
import ModalHOC from '../../../../page/Detail/ModalHOC';
import Register from '../../../../page/Register/Register';
import Login from '../../../../page/Login/Login';
import _ from 'lodash'
import { history } from '../../../../App';
import { ACCESSTOKEN, USER_LOGIN } from '../../../../util/setting';
export default function Header(props) {
    const [component, SetComponent] = useState()
    const { userLogin } = useSelector(rootReducer => rootReducer.UserManageReducer)
    const renderLogin = () => {
        if (_.isEmpty(userLogin)) {
            return <Fragment>
                <NavLink to={'/register'} className="self-center px-8 py-3 rounded" data-toggle="modal" data-target="#modelId" onClick={() => SetComponent(<Register />)}>Sign in</NavLink>
                <NavLink to={'/login'} className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900" data-toggle="modal" data-target="#modelId" onClick={() => SetComponent(<Login />)}>Sign up</NavLink>
            </Fragment>
        }
        return <Fragment> <button onClick={() => {
            history.push('/profile')
        }} className="self-center px-8 py-3 rounded">Hello {userLogin.taiKhoan}</button>
            <button onClick={() => {
                localStorage.removeItem(USER_LOGIN);
                localStorage.removeItem(ACCESSTOKEN);
                history.push('/home');
                window.location.reload();
            }} className="text-yellow-500 mr-5">Đăng xuất</button>
        </Fragment>
    }
    return (
        <Fragment>
            <header className="p-4 dark:bg-coolGray-800 dark:text-coolGray-100 bg-opacity-40 bg-black text-white fixed w-full z-10">
                <div className="container flex justify-between h-16 mx-auto">
                    <NavLink rel="noopener noreferrer" to="/" aria-label="Back to homepage" className="flex items-center p-2">
                        <img src='https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png' />
                    </NavLink>
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink to="/home" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent " activeClassName='dark:text-violet-400 dark:border-violet-400'>Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/contact" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName='dark:text-violet-400 dark:border-violet-400'>Contact</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/news" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent" activeClassName='dark:text-violet-400 dark:border-violet-400'>News</NavLink>
                        </li>

                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        {renderLogin()}
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                </div>





            </header>

        </Fragment>


    )
}


