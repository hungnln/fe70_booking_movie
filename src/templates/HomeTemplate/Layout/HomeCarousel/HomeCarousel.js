import React, { useEffect } from 'react'
import { Carousel } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovieBannersAction } from '../../../../redux/actions/MovieManageAction';
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function HomeCarousel() {
    const { arrMovieBanners } = useSelector(rootReducer => rootReducer.MovieManageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        const action = getAllMovieBannersAction();
        dispatch(action);
        console.log(arrMovieBanners, 'banner');
    }, [])
    const renderAllMovieBanners = () => {
        return arrMovieBanners.map((banner, index) => {
            return <div>
                <div style={contentStyle}>
                    <img index={index} src={banner.hinhAnh} className="w-full h-full object-fill" />
                </div>
            </div>
        })
    }
    return (
        <Carousel effect="fade" style={{ position: 'relative', zIndex: 1 }}>
            {renderAllMovieBanners()}
        </Carousel>
    )
}
