import axios from "../axios";


export const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8002/api/doctor/'); 

      return response.data;
    } catch (error) {
      throw error; 
    }
  };