import { GET_ALL_MOVIES, GET_ALL_MOVIE_BANNERS, GET_FILM_DETAIL, GET_FILM_SHOWTIME } from "../actions/types/MovieManageType"

const initialState = {
    arrMovieBanners: [],
    arrMovies: [],
    filmDetail: {},
    filmShowTime: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_MOVIE_BANNERS:
            state.arrMovieBanners = action.arrMovieBanners;
            return { ...state }
        case GET_ALL_MOVIES:
            state.arrMovies = action.arrMovies;
            return { ...state }
        case GET_FILM_DETAIL:
            state.filmDetail = action.filmDetail;
            return { ...state }
        case GET_FILM_SHOWTIME:
            state.filmShowTime = action.filmShowTime;
        default:
            return state
    }
}
