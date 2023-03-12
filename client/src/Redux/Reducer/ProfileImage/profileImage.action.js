import axios from "axios";
import { UPLOAD_IMAGE } from "./profileImage.type";

// profile picture update
export const uploadProfilePicture = (image) => async (dispatch) => {
  try {
    const profileImage = await axios({
      method: "PUT",
      url: `http://localhost:4000/api/user/profilepic`,
      data: { image },
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(profileImage.data);
    return dispatch({ type: UPLOAD_IMAGE, payload: image });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};
