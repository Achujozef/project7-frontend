import React, { useState } from "react";
import { useSelector } from "react-redux";
import CommentPopup from "./CommentPopup";
import { likeOrDislikePost } from "../../../api/likeOrDislikePost ";


const Post = ({ post }) => {


  // ================================================================>DECLERATION<==============================================================================
  const like = post.liked;
  const [isLiked, setIsLiked] = useState(like);
  const [likeCount, setLikeCount] = useState(post.like);
  const user = useSelector((state) => state.userlogin.patient);
  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");



  // ================================================================>FORMATNG DATE AND TIME<==============================================================================
  function formatDateTime(dateTimeString) {

    const options = {

      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,

    };
    return new Date(dateTimeString).toLocaleDateString(undefined, options);
  }



  // ================================================================>VIEW DOCTOR PROFILE<==============================================================================
const handleViewDoctorProfile=()=>{
    
}



// ================================================================>LIKE OR DISLIKE POST<==============================================================================
  const handleLike = async () => {
    try {

      const { isLiked, likeCount } = await likeOrDislikePost( post , user );

      if ( isLiked !== undefined && likeCount !== undefined) {

        setIsLiked ( isLiked );
        setLikeCount ( likeCount )

      }

    } catch ( error ) {

      console.error ( 'Error liking/unliking post :',error);

    }

  };

// ================================================================COMMENT ==============================================================================
  const handleViewComments = () => {
    setShowComments(true);
  };

  
  const handleCloseComments = () => {
    setShowComments(false);
  };


  const handlePostComment = () => {
    // Implement the logic to post the comment, e.g., using an API call
    // After posting, you can update the list of comments or close the comment popup.
  };


  return (
    <div className="rounded-md mb-4 bg-gray-50 p-4 relative">
      <div className="flex justify-end">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2"
          onClick={handleViewDoctorProfile}
        >
          View Post Owner
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-gray-500 text-sm">{formatDateTime(post.created_at)}</p>
      </div>
      <div className="mt-4 p-4 border-gray-300 rounded-md flex item-center">
        <img src={post.photo} alt="Post Image" className="w-100 mr-4" />
      </div>
      <div className="mt-2 flex justify-between">
        <button
          className={`${isLiked ? "bg-red-500" : "bg-blue-500"} text-white rounded-md px-4 py-2 mr-1`}
          onClick={handleLike}
        >
          {isLiked ? 'Liked' : 'Like'} {likeCount}
        </button>
        <button className="bg-green-500 text-white rounded-md px-4 py-2 mr-2" onClick={handleViewComments}>
          Comment
        </button>
        <button className="bg-red-500 text-white rounded-md px-4 py-2 mr-1">
          Share
        </button>
      </div>
      {showComments && (
      <CommentPopup
        comments={post.comments}
        onClose={handleCloseComments}
        />
        )}
    </div>
  );
};

export default Post;
