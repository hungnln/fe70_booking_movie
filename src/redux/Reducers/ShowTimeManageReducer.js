import { GET_ALL_SHOWTIME_BY_THEATER_CLUSTER } from "../actions/types/ShowTimeManageType"

const initialState = {
    arrShowTimes: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_SHOWTIME_BY_THEATER_CLUSTER:
            state.arrShowTimes = action.arrShowTimes
            return { ...state }

        default:
            return state
    }
}
