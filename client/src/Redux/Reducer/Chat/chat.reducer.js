// import { fetchUser } from "./chat.action";
import {FETCH_CHATS , FETCH_USER} from "./chat.type"
const initialState = {
  chats: [],
  newUser : [] , 
 
};

const chatReducer = (state =initialState, action) => {
  switch (action.type) {
   
    case FETCH_CHATS:
      return {
        ...state,
        chats: action.payload,
      };

    case FETCH_USER : 
      return {
        ...state, 
        newUser : action.payload,
      }

   
    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;