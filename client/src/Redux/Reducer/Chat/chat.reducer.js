import { fetchUser } from "./chat.action";
import {CREATE_CHAT, FETCH_CHATS , FETCH_USER} from "./chat.type"
const initialState = {
  chats: [],
  newUser : [] , 
  createdChat: {}
 
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
      };
    
    case CREATE_CHAT : 
      return{
        ...state,
        createdChat : action.payload

      }
   
    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;