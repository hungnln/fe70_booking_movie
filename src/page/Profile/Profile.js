import React, { Fragment, useEffect, useState } from 'react'
import { Tabs, Radio } from 'antd';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { MANHOM } from '../../util/setting';
import { values } from 'lodash';
import { getUserInformation, setUserInformation } from '../../redux/actions/UserManageAction';

const { TabPane } = Tabs;
export default function Profile(props) {
    const [size, setSize] = useState({
        size: 'small'
    })

    const { userInformation } = useSelector(rootReducer => rootReducer.UserManageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserInformation());
    }, [])
    const informationForm = useFormik({
        enableReinitialize: true,
        initialValues: {
            taiKhoan: userInformation.taiKhoan,
            matKhau: userInformation.matKhau,
            email: userInformation.email,
            hoTen: userInformation.hoTen,
            soDt: userInformation.soDT,
            maLoaiNguoiDung: userInformation.maLoaiNguoiDung,
            maNhom: userInformation.maNhom,

        },
        onSubmit: values => {
            console.log(userInformation, 'user');
            console.log(values, 'infor');
        }
    })
    return (
        <Fragment>
            <Tabs defaultActiveKey="1" type="card" size={size}>
                <TabPane tab="Thông tin cá nhân" key="1">
                    <div>
                        <form onSubmit={informationForm.handleSubmit}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <div className='form-group'>
                                        <label>
                                            Email
                                        </label>
                                        <input className='form-control'
                                            id='email' onChange={informationForm.handleChange}
                                            onBlur={informationForm.handleBlur}
                                            value={informationForm.values.email} />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            Họ tên
                                        </label>
                                        <input className='form-control'
                                            id='hoTen' onChange={informationForm.handleChange}
                                            onBlur={informationForm.handleBlur}
                                            value={informationForm.values.hoTen} />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            Số điện thoại
                                        </label>
                                        <input className='form-control'
                                            id='soDt' onChange={informationForm.handleChange}
                                            onBlur={informationForm.handleBlur}
                                            value={informationForm.values.soDt} />
                                    </div>
                                </div>
                                <div>
                                    <div className='form-group'>
                                        <label>
                                            Tài khoản
                                        </label>
                                        <input className='form-control' disabled
                                            id='taiKhoan' onChange={informationForm.handleChange}
                                            onBlur={informationForm.handleBlur}
                                            value={informationForm.values.taiKhoan} />
                                    </div>
                                    <div className='form-group'>
                                        <label>
                                            Mật khẩu
                                        </label>
                                        <input className='form-control'
                                            id='matKhau' onChange={informationForm.handleChange}
                                            onBlur={informationForm.handleBlur}
                                            value={informationForm.values.matKhau} />
                                    </div>
                                    <div className='form-group'>
                                        <button type='submit' onClick={() => { dispatch(setUserInformation(informationForm)) }}>Cập nhật</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </TabPane>
                <TabPane tab="Lịch sử đặt vé" key="2">
                    Content of card tab 2
                </TabPane>

            </Tabs>
        </Fragment>

    )
}
