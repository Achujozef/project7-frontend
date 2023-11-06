import React, { useState } from "react";

const CommentPopup = ({ comments, onClose }) => {
  const [comment, setComment] = useState("");
  
  const handlePostComment = () => {
    // Implement the logic to post the comment, e.g., using an API call
    // After posting, you can update the list of comments or close the comment popup.
  };

// ================================================================>DATE TIME FORMATING<==============================================================================
  function formatDateTime ( dateTimeString ) {

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

// ================================================================>COMMENT CHANGES<==============================================================================
  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };


  return (
    <div className="comment-popup">
      <button className="close-button" onClick={onClose}>Close</button>
      <h2 className="comment-header">Comments</h2>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <p className="comment-text">{comment.text}</p>
            <p className="comment-timestamp">{formatDateTime(comment.created_at)}</p>
          </div>
        ))}
      </div>
      <div className="comment-input">
        <input
          type="text"
          placeholder="Write a comment"
          className="comment-input-field"
          style={{ width: "100%", padding: "10px" }}
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          className="comment-submit-button bg-green-500 text-white rounded-md px-4 py-2 mr-2"
          onClick={handlePostComment}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CommentPopup;
