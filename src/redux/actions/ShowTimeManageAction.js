import { MANHOM } from "../../util/setting"
import { GET_ALL_SHOWTIME_BY_THEATER_CLUSTER } from "./types/ShowTimeManageType"
import { http } from "../../util/setting"
export const getAllShowTimeByTheaterClusterAction = (ClusterID) => {
    return async dispatch => {
        try {
            let result = await http.get(`api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${MANHOM}&maHeThongRap=${ClusterID}`)
            //sau khi lấy được danh sách rạp thì dispatch lên reducer
            dispatch({
                type: GET_ALL_SHOWTIME_BY_THEATER_CLUSTER,
                arrShowTimes: result.data.content,

            })

        } catch (error) {
            console.log({ error });
        }
    }
}