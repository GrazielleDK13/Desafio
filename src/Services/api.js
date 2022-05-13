import axios from "axios";

export const apiAppFilmes = axios.create({

    baseURL: 'https://626d7810e58c6fabe2d5e12a.mockapi.io/',
    headers: {
        'content-Type': 'application/json'
    }
})