import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk'
const rootReducer = combineReducers({
    //Nơi chứa các state của ứng dụng
    carDetailReducer: (state = { id: 1, name: 'black car', img: './img/products/black-car.jpg', price: 1000 }, action) => {
        switch (action.type) {
            case 'XEM_CHI_TIET': {
                state = action.carDetail;
                return { ...state }; //immutable
            }
        }
        return state;
    },

});
let middleWare = applyMiddleware(reduxThunk)
let composeCustom = compose(middleWare,
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__())
export const store = createStore(rootReducer, composeCustom);