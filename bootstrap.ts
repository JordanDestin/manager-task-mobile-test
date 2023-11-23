import axios from 'axios';
import useAuth from './composable/auth/auth'

declare global {
    interface Window {
      axios: typeof axios;
    }
}

const auth = useAuth();

window.axios = axios;

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios.defaults.withCredentials = true;
window.axios.defaults.baseURL = "http://localhost:8000/api";
window.axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        const auth = useAuth();
        auth.destroyTokenAndRedirectTo('Login');
      }
  
      return Promise.reject(error);
    }
  );
  
  if (localStorage.getItem("token")) {
    window.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
  }