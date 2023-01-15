import axios from "axios";
import { FETCH_CHATS, FETCH_USER } from  "./chat.type";

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
};

export const fetchUser = (Search) => async(dispatch) => {
    try {

        const newUser = await axios({
            method : "GET",
            url : `http://localhost:4000/api/user?search=${Search}`,
        });

        // console.log(...newUser.data);
        
        return dispatch({type : FETCH_USER , payload :newUser.data })
        
    } catch (error) {
        return dispatch({type : "ERROR" , payload : error})
    }
};

export const createChat = (userId) => async(dispatch) => {
    try {
        const newCreatedChat = await axios({
            method : "POST",
            url : "http://localhost:4000/api/chat",
            data : {userId}            
        })
        return dispatch({type : "CREATE_CHAT" , payload : newCreatedChat.data})
        // axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`
    } catch (error) {
        return dispatch({type : "ERROR" , payload : error})
    }
}