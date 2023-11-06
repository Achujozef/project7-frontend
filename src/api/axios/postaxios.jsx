import axios from "axios"

// let token = JSON.parse(localStorage.getItem('authorization.user'))

const postaxios = axios.create({
    baseURL: 'http://localhost:8003',
    headers:{
      'Authorization':localStorage.getItem('userauthToken')? 'Bearer  '+localStorage.getItem('userauthToken'):null,
      'Content-Type':'application/json',
      accept:'application/json'
    }
  })

export default postaxios