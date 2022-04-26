import React, { useEffect } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieAction } from '../../redux/actions/MovieManageAction';
const { TabPane } = Tabs;
export default function Home() {
    const size = 'small';
    const tabPosition = 'left';
    const { arrMovies } = useSelector(rootReducer => rootReducer.MovieManageReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = getAllMovieAction();
        dispatch(action);
    }, [])
    const renderAllMovies = () => {
        return arrMovies.map((movie, index) => {
            return <a href="#" className="group" style={{ minHeight: 450 }}>
                <div className="w-full h-3/4 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={movie.hinhAnh} alt="movie-banner" className="w-full h-full object-center object-fill group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{movie.tenPhim}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{movie.danhGia}</p>
            </a>


        })

    }
    const renderAllMoviesComimgSoon = () => {
        return arrMovies.filter(movie => movie.sapChieu == true).map((movie, index) => {
            return <a href="#" className="group" style={{ minHeight: 450 }}>
                <div className="w-full h-3/4 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={movie.hinhAnh} alt="movie-banner" className="w-full h-full object-center object-fill group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{movie.tenPhim}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{movie.danhGia}</p>
            </a>

        })
    }
    const renderAllMoviesNow = () => {
        return arrMovies.filter(movie => movie.dangChieu == true).map((movie, index) => {
            return <a href="#" className="group" style={{ minHeight: 450 }}>
                <div className="w-full h-3/4 aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img src={movie.hinhAnh} alt="movie-banner" className="w-full h-full object-center object-fill group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{movie.tenPhim}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{movie.danhGia}</p>
            </a>

        })
    }
    return (
        <>
            <Tabs defaultActiveKey="1" type="card" size={size}>
                <TabPane tab="Tất cả phim" key="1">
                    <div className='grid grid-cols-6 gap-2'>
                        {renderAllMovies()}
                        {/* {renderAllMovies()} */}

                    </div>
                </TabPane>
                <TabPane tab="Phim Đang Chiếu" key="2">
                    <div className='grid grid-cols-6 gap-2'>
                        {renderAllMoviesNow()}
                    </div>
                </TabPane>
                <TabPane tab="Phim Sắp Chiếu" key="3">
                    <div className='grid grid-cols-6 gap-2'>
                        {renderAllMoviesComimgSoon()}
                    </div>
                </TabPane>
            </Tabs>
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

        </>


    )
}
