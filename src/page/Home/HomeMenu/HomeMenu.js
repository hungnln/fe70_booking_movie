import React, { Fragment, useEffect } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { getAllTheaterAction, getAllTheaterByBrandAction, getAllTheaterByBrandAndShowTimeAction } from '../../../redux/actions/TheaterManageAction';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
const { TabPane } = Tabs;
const tabPosition = 'left';
export default function HomeMenu(props) {
    const { arrTheater, arrTheaterByBrand } = useSelector(rootReducer => rootReducer.TheaterManageReducer)
    const dispatch = useDispatch();
    useEffect(async () => {
        const action = await getAllTheaterAction();
        await dispatch(action);
        // return console.log('test', arrTheater);

        // dispatch(getAllTheaterByBrandAction(arrTheater[0].maHeThongRap));
    }, [])

    return (
        <Tabs tabPosition={tabPosition} onTabClick={(key) => { dispatch(getAllTheaterByBrandAndShowTimeAction(key)) }}>
            {
                arrTheater.map((theater, index) => {
                    return <TabPane tab={<img src={theater.logo} style={{ width: '30px' }} alt={theater.biDanh} />} key={theater.maHeThongRap}>
                        <Tabs tabPosition={tabPosition}>

                            {arrTheaterByBrand.map((cluster, index) => {
                                return cluster.lstCumRap.map((theaterCluster, index) => {
                                    return <TabPane tab={
                                        <div className="relative">
                                            <div><img src={theaterCluster.hinhAnh} /></div>
                                            <h3>{theaterCluster.tenCumRap}</h3>
                                            <p>{theaterCluster.diaChi}</p>
                                        </div>
                                    } key={theaterCluster.maCumRap}>
                                        {theaterCluster.danhSachPhim.slice(0, 4).map((film, index) => {
                                            return <Fragment key={index}>
                                                <div className="my-5" >
                                                    <div style={{ display: 'flex' }}>
                                                        <img style={{ height: 75, width: 75 }} src={film.hinhAnh} alt={film.tenPhim} onError={(e) => { e.target.onerror = null; e.target.src = "https://picsum.photos/75/75" }} />

                                                        <div className="ml-2">
                                                            <h1 className="text-2xl text-green-700" >{film.tenPhim}</h1>
                                                            <p>{theaterCluster.diaChi}</p>
                                                            <div className="grid grid-cols-6 gap-6">
                                                                {film.lstLichChieuTheoPhim?.slice(0, 12).map((showTime, index) => {
                                                                    return <NavLink className="text-2xl text-green-400" to={`/checkout/${showTime.maLichChieu}`} key={index}>
                                                                        {moment(showTime.ngayChieuGioChieu).format('hh:mm A')}
                                                                    </NavLink>
                                                                })}
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                                <hr />
                                            </Fragment>
                                        })}
                                    </TabPane>
                                })
                            })
                            }
                        </Tabs>
                    </TabPane>
                })
            }
            {/* <TabPane tab="Tab 1" key="1">
                <Tabs tabPosition={tabPosition}>
                    <TabPane tab="Tab 1" key="1">
                        Content of Tab 1
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">
                        Content of Tab 2
                    </TabPane>
                    <TabPane tab="Tab 3" key="3">
                        Content of Tab 3
                    </TabPane>
                </Tabs>
            </TabPane>
            <TabPane tab="Tab 2" key="2">
                Content of Tab 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
                Content of Tab 3
            </TabPane> */}
        </Tabs >
    )
}
