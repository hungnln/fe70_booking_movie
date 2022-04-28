import React, { Fragment, useEffect, useState } from 'react'
import { getFilmDetailAction, getFilmShowTimeAction } from '../../redux/actions/MovieManageAction';
import { useSelector, useDispatch } from 'react-redux';
import { Tabs, Radio, Space, Rate } from 'antd';
import moment from 'moment';
import { map } from 'lodash';
import { NavLink } from 'react-router-dom'
import _ from 'lodash';
export default function Detail(props) {
    const { filmDetail } = useSelector(rootReducer => rootReducer.MovieManageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(getFilmDetailAction(id))
    }, [])
    const [showModal, setShowModal] = useState(false);
    const { TabPane } = Tabs;
    const [mainTabPosition, changeMainTabPosition] = useState('left')
    const [secondaryTabPosition, changeSecondaryTabPosition] = useState('top')
    const renderAllTheaterByBrandMatchShowTime = (TheaterByBrand, showTime) => {
        return TheaterByBrand.map(theater => {
            return theater.lichChieuPhim.map(TheaterShowTime => {
                if (_.isEqual(TheaterShowTime.ngayChieuGioChieu, showTime) == true) {
                    console.log('theater', theater);
                    return <div>
                        <div className='flex'>
                            <img src={theater.hinhAnh} className='w-20' />
                            <div>
                                <NavLink to={`/chitietphongve/${TheaterShowTime.maLichChieu}`}>
                                    <h3>{theater.tenCumRap}</h3>
                                    <p>{theater.diaChi}</p>
                                </NavLink>
                                <a target={'_blank'} href={`https://www.google.com/maps/search/?api=1&query=${theater.diaChi}`}>[Bản Đồ]</a>
                            </div>
                        </div>
                    </div>
                }
            });
        });
    }
    const renderAllBrand = () => {
        return filmDetail.heThongRapChieu?.map((TheaterByBrand, index) => {
            return <TabPane tab={
                <Fragment>
                    <img src={TheaterByBrand.logo} style={{ width: '30px' }} alt={TheaterByBrand.biDanh} />
                    <span>{TheaterByBrand.tenHeThongRap}</span>
                </Fragment>
            } key={TheaterByBrand.maHeThongRap}>
                <Tabs tabPosition={secondaryTabPosition} onTabClick={(key) => { console.log('ma', key); }}>
                    {TheaterByBrand.cumRapChieu?.map((showTimes, index1) => {
                        return showTimes.lichChieuPhim?.map((showTime, index) => {
                            return <TabPane key={showTime.maLichChieu} tab={<NavLink to="#"><div>{moment(showTime.ngayChieuGioChieu).format('DD-MM-YYYY')}</div><div>{moment(showTime.ngayChieuGioChieu).format('hh:mm A')}</div></NavLink>}>
                                {renderAllTheaterByBrandMatchShowTime(TheaterByBrand.cumRapChieu, showTime.ngayChieuGioChieu)}
                            </TabPane>
                        })
                    })}
                </Tabs>
            </TabPane>
        })
    }
    return (
        <Fragment>
            <div className='grid grid-cols-6 gap-4'>
                <div className='col-span-2'>
                    <img src={filmDetail.hinhAnh} className='w-full'></img>
                </div>
                <div className='col-span-4'>
                    <h2>{filmDetail.tenPhim}</h2>
                    <p>{filmDetail.moTa}</p>
                    <p>Ngày Chiếu : {moment(filmDetail.ngayKhoiCHieu).format('DD - MM - YYYY')}</p>
                    <h1 style={{ marginLeft: '15%', color: 'yellow', fontWeight: 'bold', fontSize: 15 }}>Đánh giá</h1>
                    <h1 style={{ marginLeft: '5%' }} className="text-green-400 text-2xl"><Rate allowHalf value={filmDetail.danhGia / 2} style={{ color: '#78ed78', fontSize: 30 }} /></h1>
                    <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                        <span className="text-white">

                            {filmDetail.danhGia * 10}%
                        </span>
                        <div className="slice">
                            <div className="bar"></div>
                            <div className="fill"></div>

                        </div>

                    </div>
                    <br />
                    <button
                        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(true)}
                    >
                        Xem Trailer
                    </button>
                    <button>Mua vé ngay</button>
                </div>
            </div>
            <Tabs tabPosition={mainTabPosition}>
                {renderAllBrand()}

            </Tabs>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button onClick={() => setShowModal(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <iframe width="560" height="315" src={filmDetail.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}





        </Fragment >

    )
}
