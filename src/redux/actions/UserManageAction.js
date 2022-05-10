import { history } from "../../App"
import { ERROR, http, SUCCESS, WARNING } from "../../util/setting"
import { GET_USER_INFORMATION, LOGIN, SET_USER_INFORMATION } from "./types/UserManageType"
import swal from 'sweetalert';
import { message } from "../../util/swal";


export const loginAction = (information) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/DangNhap', information)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: LOGIN,
                    userInformation: result.data.content
                });
                message('Login Success', SUCCESS).then((value) => { history.goBack(); });
            }
        } catch (error) {
            message(error.response.data.content, WARNING)
        }
    }
}
export const registerAction = (information) => {
    return async dispatch => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/DangKy', information)
            if (result.data.statusCode === 200) {
                message('Register Success', SUCCESS).then((value) => { history.push('/login'); });
            }
        } catch (error) {
            message(error.response.data.content, WARNING)
        }
    }
}
export const getUserInformation = () => {
    return async dispatch => {
        try {
            let result = await http.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
            if (result.data.statusCode === 200) {
                dispatch({
                    type: GET_USER_INFORMATION,
                    userInformation: result.data.content
                })
                console.log('infor', result.data.content);
            }
        } catch (error) {
            message(error.response.data.content, ERROR)
        }
    }
}
export const setUserInformation = (information) => {
    return async dispatch => {
        try {
            let result = await http.put('/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',information)
            if (result.data.statusCode === 200) {
                dispatch({
                    type: SET_USER_INFORMATION,
                    userInformation: result.data.content
                })
                console.log('infor', result.data.content);
            }
        } catch (error) {
            message(error.response.data.content, ERROR)
        }
    }
}