import axios from 'axios';

const API_URL = "";

export const getItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // retorna y axios guarda data dentro de response.data        
    } catch (err) {
        console.error("GET error: ", err);
        return null;
    }
};