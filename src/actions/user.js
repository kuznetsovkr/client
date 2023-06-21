import axios from "axios";
import {setUser} from "../components/reducers/userReducer";

export const registration = async (nickname,password,email) => {
    try {
        const jsonData = {
            "username" : nickname,
            "password" : password,
            "email" : email
        };
        const response  = await axios.post ('https://f9ck.onrender.com/auth/registration', jsonData )
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login = (nickname,password) => {
    return async dispatch => {
        try {
            const jsonData = {
                "username" : nickname,
                "password" : password
            };
            const response  = await axios.post ('https://f9ck.onrender.com/auth/login', jsonData )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token',response.data.token)
            console.log(response.data)
        } catch (e) {
            alert(e)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`https://f9ck.onrender.com/auth/auth`,
                {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
