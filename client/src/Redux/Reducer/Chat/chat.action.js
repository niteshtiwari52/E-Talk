import axios from "axios";
import { FETCH_CHATS } from  "./chat.type";

export const fetchChats = () => async (dispatch) => {
    try {

        const chats = await axios({
            method : "GET",
            url : "http://localhost:4000/api/chat",
        });
        console.log(chats.data);
        
        return dispatch({type : FETCH_CHATS , payload : chats.data })
    } catch (error) {
        return dispatch({type : "ERROR" , payload : error})
    }
}