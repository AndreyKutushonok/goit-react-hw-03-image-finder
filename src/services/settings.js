import axios from 'axios';

export const axiosGet = axios.create({
    baseURL: 'https://pixabay.com/api/',

    params: {
        key: '25706791-83f254c628a19fe308d2a3f92',
        image_type: 'photo',
        orientation: 'horizontal',
    },
});
