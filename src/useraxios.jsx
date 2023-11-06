import axios from "axios"

const instance = axios.create({
  baseURL: 'http://localhost:8001',
  headers:{
    'Authorization':localStorage.getItem('userauthToken')? 'Bearer  '+localStorage.getItem('userauthToken'):null,
    'Content-Type':'application/json',
    accept:'application/json'
  }
})

export default instance



