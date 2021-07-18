import axios from 'axios'

export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://1ttk.ru/',
  headers: {
    'API-KEY': '7f176408-7834-4d51-bff6-b8e6b3984465',
  },
})
