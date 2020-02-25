//Juan Garcia da Rosa 234281 - Gabriel Diaz 205028
//const axios = require("axios");
import axios from "axios";
const API_URL = "http://tiendaonline2020.herokuapp.com/api";

export const signUp = async (userName, pass) => {
    const signUp = axios.post(
        `${API_URL}/user/register`,
        {
            email: userName,
            password: pass
        }
    );

    return await signUp;
}

export const Login = async (userName, pass) => {
    const signUp = axios.post(
        `${API_URL}/user/login`,
        {
            email: userName,
            password: pass
        }
    );

    return await signUp;
}

export const getProducts = async ()  => {
    const response = axios(`${API_URL}/product/all`);
    
    return await response;
}