import { createStore } from "redux";

const favourtMoviesReducer = (
  state = { favourtMovies: [], allMovies: [] },
  action
) => {
  if (action.type === "addFvrtMov") {
    return {
      favourtMovies: [...state.favourtMovies, action.fmov],
      allMovies: state.allMovies,
    };
  }
  if (action.type === "addAllMov") {
    return {
      favourtMovies: state.favourtMovies,
      allMovies: [...state.allMovies, action.amov],
    };
  }
  if (action.type === "removeAllMov") {
    return {
      favourtMovies: state.favourtMovies,
      allMovies: [],
    };
  }
  return state;
};

const store = createStore(favourtMoviesReducer);

export default store;
