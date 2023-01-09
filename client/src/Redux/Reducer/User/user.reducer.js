import { SELF, CLEAR_USER } from "./user.type";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case SELF:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_USER:
      return {
        user: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;