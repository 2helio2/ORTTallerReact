const axios = require("axios");
const API_URL = "http://tiendaonline2020.herokuapp.com/api";

const signUp = async (userName, pass) => {
    const signUp = axios.post(
        `${API_URL}/user/register`,
        {
            email: userName,
            password: pass
        }
    );

    return await signUp;
}

const login = async (userName, pass) => {
    const signUp = axios.post(
        `${API_URL}/user/login`,
        {
            email: userName,
            password: pass
        }
    );

    return await signUp;
}

const getProducts = async ()  => {
    const response = axios(`${API_URL}/product/all`);
    
    return await response;
}

module.exports = {
    signUp,
    login,
    getProducts
};