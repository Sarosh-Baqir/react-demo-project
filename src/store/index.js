import { createStore } from "redux";

const favourtMoviesReducer = (state = { favourtMovies:[] }, action) => {
    if(action.type === 'addFvrtMov') {
        return({
            favourtMovies: [...state.favourtMovies, action.fmov]
        }
        );
    }
    return state
}

const store = createStore(favourtMoviesReducer);

export default store;