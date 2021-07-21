import axios from 'axios'

const client = axios.create({
  withCredentials: true,
})

client.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? '/' : 'https://api.backtest.net'

export default client
