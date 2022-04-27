import { GET_ALL_THEATER, GET_ALL_THEATER_BY_BRAND } from "./types/TheaterManageType";
import { http, MANHOM } from "../../util/setting"
import { getAllShowTimeByTheaterClusterAction } from "./ShowTimeManageAction";
export const getAllTheaterAction = () => {
    return async dispatch => {
        try {
            let result = await http.get('/api/QuanLyRap/LayThongTinHeThongRap')
            //sau khi lấy được danh sách rạp thì dispatch lên reducer
            dispatch({
                type: GET_ALL_THEATER,
                arrTheater: result.data.content,

            })
            dispatch(getAllTheaterByBrandAndShowTimeAction(result.data.content[0].maHeThongRap))

        } catch (error) {
            console.log({ error });
        }
    }
}
export const getAllTheaterByBrandAction = (theaterID) => {
    return async dispatch => {
        try {
            let result = await http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}&maHeThongRap=${theaterID}`)
            //sau khi lấy được danh sách rạp thì dispatch lên reducer
            dispatch({
                type: GET_ALL_THEATER_BY_BRAND,
                arrTheaterByBrand: result.data.content,
            })
            // dispatch(getAllShowTimeByTheaterClusterAction(brandID))

        } catch (error) {
            console.log({ error });
        }
    }
}
export const getAllTheaterByBrandAndShowTimeAction = (ClusterID) => {
    return async dispatch => {
        try {
            let result = await http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}&maHeThongRap=${ClusterID}`)
            //sau khi lấy được danh sách rạp thì dispatch lên reducer
            dispatch({
                type: GET_ALL_THEATER_BY_BRAND,
                arrTheaterByBrand: result.data.content,

            })

        } catch (error) {
            console.log({ error });
        }
    }
}
console.log(1);
getAllTheaterAction();