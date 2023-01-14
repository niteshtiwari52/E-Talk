import {FETCH_CHATS} from "./chat.type"
const initialState = {
  chats: [],
  trail : {}
};

const chatReducer = (state =initialState, action) => {
  switch (action.type) {
   
    case FETCH_CHATS:
      return {
        ...state,
        chats: action.payload,
      };
   
    default:
      return {
        ...state,
      };
  }
};

export default chatReducer;