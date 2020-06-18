import axios from 'axios';

import { API_URL } from '../constants';

const getJoke = async () => {
    return await axios.get(API_URL);
};

export default getJoke;
