import axios from "axios"

// let token = JSON.parse(localStorage.getItem('authorization.user'))

const instance = axios.create({
  baseURL: 'http://localhost:8002',
  headers:{
    'Authorization':localStorage.getItem('authToken')? 'Bearer '+localStorage.getItem('authToken'):null,
    'Content-Type':'application/json',
    accept:'application/json'
  }
})

export default instance


// bearer token