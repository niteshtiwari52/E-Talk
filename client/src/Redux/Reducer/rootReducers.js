import { combineReducers } from "redux";

// reducers or storage units
import auth from "./Auth/auth.reducer";
import user from "./User/user.reducer";
import chat from "./Chat/chat.reducer";
import message from "./Message/message.reducer";
import themeReducer from "./Theme/theme.reducer";
import tabReducer from "./Tab/tabReducer";

const rootReducer = combineReducers({
  auth,
  user,
  chat,
  message,
  themeReducer,
  tabReducer,
});

export default rootReducer;
