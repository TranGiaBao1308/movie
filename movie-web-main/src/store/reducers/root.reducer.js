import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import { QuanLyRapReducer } from "./service.reducer";
import { spinnerReducer } from "./spinner.reducer";
import { TicketReducer } from "./ticket.reducer";
import { userReducer } from "./user.reducer";

const rootReducer = combineReducers({
  movie: movieReducer,
  user: userReducer,
  spinner: spinnerReducer,
  service:QuanLyRapReducer,
  ticket:TicketReducer,
});

export default rootReducer;
