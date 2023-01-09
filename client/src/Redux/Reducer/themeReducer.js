import * as actions from "../action/action"
const initialstate ={ 
    darkThemeEnabled: false 
}

const themeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actions.TOGGLE_DARKTHEME:
          return { ...state, darkThemeEnabled: !state.darkThemeEnabled };
    
        default:
          return state;
      }
}

export default themeReducer;