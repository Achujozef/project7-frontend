import axios  from "axios";
import { API_URLS } from "./config";


export const likeOrDislikePost =async (post, user) => {

    try {
        const response = await axios.post (

            `${API_URLS.POST_LIKE_DISLIKE}/${post.id}/like-dislike/?user_id=${user.id}`
        
        );

        if (response.data.message === 'LIked' || response.data.message === 'Disliked') {
           
            return {

                isLiked: response.data.message ==='Liked',
                isCount: response.data.like_count
            }
        }
    } catch (error){
        
        console.error("Error liking/unliking post : ",error)
        throw error

    }
};