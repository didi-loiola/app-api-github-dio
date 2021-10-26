import axios from 'axios'

const api = axios.request({
    baseURL: 'https://api.github.com/'
})

export default api