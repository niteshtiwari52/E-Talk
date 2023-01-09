import { TOGGLE_DARKTHEME } from "./theme.type";
const initialstate ={ 
    darkThemeEnabled: false 
}

const themeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case TOGGLE_DARKTHEME:
          return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    
        default:
          return state;
      }
}

export default themeReducer;