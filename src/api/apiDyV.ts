import axios from 'axios';

const apiDyV = axios.create({
  baseURL: import.meta.env.VITE_API_DYV_URL,
});

apiDyV.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiDyV;
