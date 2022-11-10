import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  // const token = ;
  // config.headers.Authorization =  token;

  return config
})

api.interceptors.response.use(response => {
  return Promise.resolve(response.data)
}, (error) => {
  return Promise.reject(error.response.data)
})

export default api
