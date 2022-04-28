import { GET_ALL_THEATER, GET_ALL_THEATER_BY_BRAND } from "../actions/types/TheaterManageType"

const initialState = {
    arrTheater: [],
    arrTheaterByBrand: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_THEATER:
            state.arrTheater = action.arrTheater
            return { ...state, }
        case GET_ALL_THEATER_BY_BRAND:
            state.arrTheaterByBrand = action.arrTheaterByBrand
            return { ...state, }
        default:
            return state
    }
}
