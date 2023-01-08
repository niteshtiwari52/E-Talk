import { combineReducers } from "redux";

// reducers or storage units
import auth from "./Auth/auth.reducer";
import  themeReducer  from "./themeReducer";


const rootReducer = combineReducers({
    auth,
    themeReducer
});

export default rootReducer;
