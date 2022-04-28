import { http, MANHOM } from "../../util/setting"
import { GET_ALL_MOVIES, GET_ALL_MOVIE_BANNERS, GET_FILM_DETAIL, GET_FILM_SHOWTIME } from "./types/MovieManageType"
export const getAllMovieBannersAction = () => {
    return async dispatch => {
        try {
            let result = await http.get(`api/QuanLyPhim/LayDanhSachBanner`)
            //sau khi lấy được dữ liệu banner phim thì dispatch lên reducer
            dispatch({
                type: GET_ALL_MOVIE_BANNERS,
                arrMovieBanners: result.data.content,

            })
            console.log(result.data.content, 'ds');
        } catch (error) {
            console.log({ error });
        }
    }
}
export const getAllMovieAction = () => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`)
            //sau khi lấy được danh sách phim thì dispatch lên reducer
            dispatch({
                type: GET_ALL_MOVIES,
                arrMovies: result.data.content,

            })

        } catch (error) {
            console.log({ error });
        }
    }
}
export const getFilmDetailAction = (filmID) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`)
            // let result = await http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${filmID}`)
            //sau khi lấy được chi tiết phim thì dispatch lên reducer        
                dispatch({
                    type: GET_FILM_DETAIL,
                    filmDetail: result.data.content,
                })
            

        } catch (error) {
            console.log({ error });

        }
    }
}
export const getFilmShowTimeAction = (filmID) => {
    return async dispatch => {
        try {
            let result = await http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${filmID}`)
            //sau khi lấy được chi tiết phim thì dispatch lên reducer
            if (result.status === 200) {
                dispatch({
                    type: GET_FILM_SHOWTIME,
                    filmShowTime: result.data.content,
                })
            }

        } catch (error) {
            console.log({ error });

        }
    }
}