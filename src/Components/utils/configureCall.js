import axios from 'axios';

const SECRET_KEY = `2366f444de6143c325b7adf0b0ed9a6be0236638b7db35c31e1d36bdcb2174d7`;
const URL = `https://api.unsplash.com/search/photos`;

export const configureCall = (term) => {
    return axios.get(URL, {
        params: {query: term},
                        headers: {
                            Authorization: `Client-ID ${SECRET_KEY}`
                        }
    });
};
