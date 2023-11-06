import useraxios from "../useraxios";


export const updateDiet = async () => {
    try {
      const response = await useraxios.get('/api/feeds/doctor/'); 
      return response.data;
    } catch (error) {
      throw error; 
    }
  };