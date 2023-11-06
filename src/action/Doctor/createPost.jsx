
import axios from "axios";

export const createFeeds = async (doctor_id,formData) => {
    try {
      console.log("Reached the create feeds")
      const response = await axios.get(`http://localhost:8003/api/posts/${doctor_id}`,formData); 

      console.log("data from the feeds",response.data);
      return response;
    } catch (error) {
      throw error; 
    }
  };