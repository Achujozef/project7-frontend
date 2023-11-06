import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import {
  fetchDoctorDetails,
  fetchDoctorPosts,
} from "../../../api/DoctorProfile";
const DoctorProfile = (id) => {
  const [doctorData, setDoctorData] = useState(null);
  const [doctorPosts, setDoctorPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    fetchDoctorDetails(id.if)
      .then((response) => {
        setDoctorData(response);
      })
      .catch((error) => {
        console.error("Error Fetching Doctor Data", error);
      });
    fetchDoctorPosts(id.if)
      .then((response) => {
        setDoctorPosts(response.posts);
      })
      .catch((error) => {
        console.log("Error fetching Doctor Posts", error);
      });
  }, [id]);
  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  if (!doctorData) {
    return <div>Loading...</div>;
  }
  // console.log("Doctor Feeds Goted", doctorPosts);
  return (
    <div className="w-2/4 p-4 flex flex-col items-center">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <img
            src={doctorData.image}
            alt="Doctor Profile"
            className="w-80 h-80 object-cover rounded-full shadow-lg mr-4"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 mb-2">
              {doctorData.name}
            </h1>
            <div className="flex space-x-4">
              <button
                className={`px-4 py-2 rounded-full ${
                  isFollowing
                    ? "bg-gray-300 text-gray-600"
                    : "bg-blue-500 text-white"
                }`}
                onClick={handleFollowClick}
              >
                {isFollowing ? "Following" : "Follow"}
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-full">
                Message
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-full">
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-lg font-semibold text-blue-600 mb-2">
          Doctor's Posts
        </h2>
        <div className="overflow-y-auto mt-4" style={{ maxHeight: "580px" }}>
          <div className="m-4">
            {doctorPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg overflow-hidden shadow-lg border border-gray-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full  object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-800 text-lg font-semibold mb-2">
                    {post.title}
                  </p>
                  <p className="text-gray-600">{post.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex space-x-4">
                      <button className="bg-blue-500 text-white rounded-md px-4 py-2 mr-1">
                        Like
                      </button>
                      <button className="bg-green-500 text-white rounded-md px-4 py-2 mr-1">
                        Comment
                      </button>
                      <button className="bg-red-500 text-white rounded-md px-4 py-2 mr-1">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
