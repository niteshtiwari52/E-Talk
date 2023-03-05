import {} from "./message.action";
import { GET_ALL_MESSAGE, SEND_MESSAGE, UPDATE_GET_ALL_MESSAGE } from "./message.type";
const initialState = {
  allMessages: [],
  createdMessage: {},
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_MESSAGE:
      return {
        ...state,
        allMessages: action.payload,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        createdMessage: action.payload,
      };
    
    case UPDATE_GET_ALL_MESSAGE:
        return {
          ...state,
          allMessages: [...state.allMessages , action.payload],
        }

    default:
      return {
        ...state,
      };
  }
};

export default messageReducer;
