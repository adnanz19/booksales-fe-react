import { useJwt } from "react-jwt";
import { API } from "../_api";
import { data } from "react-router";

export const login = async ({ email, password }) => {
    try {
        const { data } = await API.post('/login', { email, password });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const register = async ({ name, username, email, password }) => {
    try {
        const { data } = await API.post('/register', { name, email, password });
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const logout = async (token) => {
    try {
        const { data } = await API.post('/logout', { token }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        });
        localStorage.removeItem('accessToken');
        return data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const useDecodeToken = (token) => {
    const { decodedToken, isExpired } = useJwt(token);
    
    try {
        if (isExpired) {
            return {
                success: false,
                message: 'Token expired',
                data: null,
            }
        }

        return {
            success: true,
            message: 'Token is valid',
            data: decodedToken,
        }
    } catch (error) {
        return {
            success: false,
            message: error.message,
            data: null,
        }
    }
}