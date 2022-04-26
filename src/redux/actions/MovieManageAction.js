import { http } from "../../util/setting"
import { GET_ALL_MOVIES, GET_ALL_MOVIE_BANNERS } from "./types/MovieManageType"
const maNhom = 'GP01'
export const getAllMovieBannersAction = () => {
    return async dispatch => {
        try {
            let result = await http.get('api/QuanLyPhim/LayDanhSachBanner')
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
            let result = await http.get('/api/QuanLyPhim/LayDanhSachPhim?' + `maNhom=${maNhom}`)
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