import { combineReducers } from "redux";

// reducers or storage units
import auth from "./Auth/auth.reducer";

const rootReducer = combineReducers({
    auth,
});

export default rootReducer;
