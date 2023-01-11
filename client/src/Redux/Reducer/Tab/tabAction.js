import { TOGGLE_TAB } from "./tabType";

export const toggleDarkTheme = (index) => ({
    type: TOGGLE_TAB,
    payload: index,
  });