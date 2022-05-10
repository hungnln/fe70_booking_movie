import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk'
import MovieManageReducer from './Reducers/MovieManageReducer';
import ShowTimeManageReducer from './Reducers/ShowTimeManageReducer';
import TheaterManageReducer from './Reducers/TheaterManageReducer';
import UserManageReducer from './Reducers/UserManageReducer';
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    MovieManageReducer,
    TheaterManageReducer,
    ShowTimeManageReducer,
    UserManageReducer,

});
let middleWare = applyMiddleware(reduxThunk)
let composeCustom = compose(middleWare,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
)
export const store = createStore(rootReducer, composeCustom);