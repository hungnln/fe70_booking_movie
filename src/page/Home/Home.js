import React, { useEffect } from 'react'
import { Tabs, Radio, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieAction } from '../../redux/actions/MovieManageAction';
import Film from '../../components/Film/Film';
import HomeMenu from './HomeMenu/HomeMenu';
const { TabPane } = Tabs;
export default function Home() {
    const size = 'small';
    const { arrMovies } = useSelector(rootReducer => rootReducer.MovieManageReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        const action = getAllMovieAction();
        dispatch(action);
    }, [])
    const renderAllMovies = () => {
        return arrMovies.map((movie, index) => {
            return <Film {...movie} />
        })

    }
    const renderAllMoviesComimgSoon = () => {
        return arrMovies.filter(movie => movie.sapChieu == true).map((movie, index) => {
            return <Film {...movie} />


        })
    }
    const renderAllMoviesNow = () => {
        return arrMovies.filter(movie => movie.dangChieu == true).map((movie, index) => {
            return <Film {...movie} />

        })
    }
    const renderAllTheater = () => {

    }
    return (
        <>
            <Tabs defaultActiveKey="1" type="card" size={size}>
                <TabPane tab="Tất cả phim" key="1">
                    <div className='grid grid-cols-6 gap-2'>
                        {renderAllMovies()}
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
            <HomeMenu />

        </>


    )
}
