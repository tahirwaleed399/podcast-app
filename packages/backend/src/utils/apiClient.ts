import axios from 'axios';
import config from '../config';

const apiClient = axios.create({
  baseURL: config.podcastApiUrl,
  timeout: 5000,
});

export default apiClient;