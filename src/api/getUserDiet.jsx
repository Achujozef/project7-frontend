import axios from "axios";


export const getUserDiet = async () => {
    try {
      const response = await axios.get('http://localhost:8003//api/posts/by-doctor/doctor/'); 
      return response.data;
    } catch (error) {
      throw error; 
    }
  };