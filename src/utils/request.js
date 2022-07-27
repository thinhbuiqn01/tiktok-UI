import axios from 'axios';
const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});
/* path: "user/search", options["q", "type"] from file Search/index.js*/
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};
export default request;
