import axios from "axios"

export const postDelete= async(postId)=>{
    try{
        const response = await axios.delete(`http://localhost:8003/api/posts/${postId}`)
 
        if (response.status === 204){
            return response
        }
        
    }catch(error){
        console.error("Failed To delete Post")
    }
}