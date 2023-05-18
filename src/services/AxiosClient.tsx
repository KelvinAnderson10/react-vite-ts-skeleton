import axios from 'axios';
// import { authHeaderInterceptor } from './interceptors/AuthHeaderInterceptors';

export const clientInstance = axios.create({
    baseURL : import.meta.env.VITE_REACT_BASE_URL
});
// clientInstance.interceptors.request.use(authHeaderInterceptor);