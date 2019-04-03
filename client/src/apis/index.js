import axios from 'axios'

axios.defaults.baseURL= '/api'

axios.interceptors.request.use(request => {
  const token = window.localStorage.getItem('token');
  if (token) {
    request.headers['Authorization'] =`Bearer ${token}`;
  }
  return request;
});

export const login = form => {
  return axios.post('/user/login', form)
  .then( res => {
    return res.data
  })
  .catch(e => {
    throw e.response.data
  })
}

export const register = form => {
  return axios.post('/user/register', form)
  .then( res => {
    return res.data
  })
  .catch( e => {
    throw e.response.data
  })
}

