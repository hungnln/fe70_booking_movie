import { GET_ALL_MOVIES, GET_ALL_MOVIE_BANNERS } from "../actions/types/MovieManageType"

const initialState = {
    arrMovieBanners: [],
    arrMovies: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_ALL_MOVIE_BANNERS:
            state.arrMovieBanners = action.arrMovieBanners;
            return { ...state }
        case GET_ALL_MOVIES:
            state.arrMovies = action.arrMovies;
            return { ...state }

        default:
            return state
    }
}
