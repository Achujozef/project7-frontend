import useraxios from "../useraxios";
import axios from "../axios";
export const fetchDoctorDetails = async(id)=>{
    try{
        const response = await axios.get(`api/user/${id}`)
        return response.data;
    }catch(error){
        console.error("Error fetching doctor data: " ,error)
        throw error
    }
}
export const fetchDoctorPosts  = async (id) => {
    try {
      const response = await axios.get(`get/post/doctor/${id}`); 

      return response.data;
    } catch (error) {
    console.error('Error fetching doctor posts:', error);
      throw error; 
    }
  };