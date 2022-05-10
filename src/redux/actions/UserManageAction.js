import { history } from "../../App"
import { http, SUCCESS, WARNING } from "../../util/setting"
import { LOGIN } from "./types/UserManageType"
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