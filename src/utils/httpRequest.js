import axios from 'axios';

console.log(process.env.NODE_ENV);
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
/* path: "user/search", options["q", "type"] from file Search/index.js*/
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest;
