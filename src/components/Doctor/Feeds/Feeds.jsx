import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctorPosts } from "../../../action/Doctor/postActions";
import { postDelete } from "../../../api/postDelete";
import CreateNewPostPopup from "../CreateNewPostPopup/CreateNewPostPopup";
import DeleteConfirmationPopup from "../DeleteConfirmationPopup/DeleteConfirmationPopup";

export default function Feeds() {
  const dispatch = useDispatch();
  const doctorPosts = useSelector((state) => state.posts.doctorPosts);
  const user = useSelector((state) => state.login.user);

  const [isCreatePopupVisible, setCreatePopupVisible] = useState(false);
  const [isDeletePopupVisible, setDeletePopupVisible] = useState(false);
  const [selectedPostId, setselectedPostId] = useState(null);
  const [localDoctorPosts, setLocalDoctorPosts] = useState(doctorPosts);
console.log("localDoctorPosts",localDoctorPosts)


  const toggleCreatePopup = () => {
    setCreatePopupVisible(!isCreatePopupVisible);
  };

  const toggleDeletePopup = () => {
    setDeletePopupVisible(!isDeletePopupVisible);
  };
  const updatePosts = () => {
    dispatch(fetchDoctorPosts()).then((response) => {
    
      console.log("AFTER FETCHING DELETE",response);
    });
  };

  useEffect(() => {
    dispatch(fetchDoctorPosts());
  }, [dispatch]);

  const formatDate = (timestamp) => {
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(timestamp).toLocaleDateString("en-US", options);
  };

  const handleDelete = (postId) => {
    setselectedPostId(postId);
    toggleDeletePopup();
  };

  const confirmDelete = () => {
    const deleted = postDelete(selectedPostId);
    toggleDeletePopup();
    console.log("DELETED STATUS CODE",deleted.status);
    if (deleted.status === 204)
    updatePosts();
  };

  return (
    <div className="w-2/4 h-screen p-8 bg-green-100 flex flex-col items-center overflow-hidden">
      <h1 className="text-3xl font-semibold mb-4">Feeds</h1>
      <div className="w-full max-w-md relative">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 pr-10"
          placeholder="Search"
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 cursor-pointer">
          Search
        </div>
      </div>
      <div className="overflow-y-auto mt-4" style={{ maxHeight: '780px' }}>
        {doctorPosts.map((post) => (
          
          <div key={post.id} className="rounded-md mb-4 bg-gray-50 p-4">
            <img src={post.photo} alt={post.description} className="w-full rounded" />
            <p className="mt-2 text-gray-800">{post.description}</p>
            <div className="mt-2 flex justify-between items-center">
              <div className="text-blue-500">Likes: {post.likes}</div>
            </div>
            <div className="mt-2">
              <small className="text-gray-600">
                Created: {formatDate(post.created_at)}
              </small>
              <div className="mt-2">
                {user && user.id === post.doctor_id && (
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white rounded-md px-3 py-1"
                    >
                      Delete
                    </button>
                    <button className="bg-blue-500 text-white rounded-md px-3 py-1">
                      Comments
                    </button>
                    <button className="bg-green-500 text-white rounded-md px-3 py-1">
                      Share
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        onClick={toggleCreatePopup}
      >
        Create New Post
      </button>
      {isCreatePopupVisible && <CreateNewPostPopup onClose={toggleCreatePopup} />}
      {isDeletePopupVisible && (
        <DeleteConfirmationPopup onCancel={toggleDeletePopup} onConfirm={confirmDelete} />
      )}
    </div>
  );
}
