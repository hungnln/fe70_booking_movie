import { ACCESSTOKEN, USER_LOGIN } from "../../util/setting";
import { GET_USER_INFORMATION, LOGIN, SET_USER_INFORMATION } from "../actions/types/UserManageType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    userInformation: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case LOGIN:
            const { userInformation } = action;
            localStorage.setItem(USER_LOGIN, JSON.stringify(userInformation));
            localStorage.setItem(ACCESSTOKEN, userInformation.accessToken);
            return { ...state, userLogin: userInformation }
        case SET_USER_INFORMATION: {
            state.userInformation = action.userInformation
            return { ...state }
        }
        case GET_USER_INFORMATION: {
            state.userInformation = action.userInformation
            return { ...state }
        }
        default:
            return state
    }
}
