import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.manager-tasks.com/api',
});

export default instance;