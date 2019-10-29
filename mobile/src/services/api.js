import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.189:3000' // IP da maquina
});

export default api;