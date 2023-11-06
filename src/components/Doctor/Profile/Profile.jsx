import React, { useState, useRef } from "react";
import axios from "../../../axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../../action/Doctor/userAction";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const fileRef = useRef();
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const updateImage = (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0];
    if (!file) {
      setError("Please select an image.");
      return;
    }
    const formData = new FormData();

    formData.append("image", file, file?.name);
    formData.append("description", description);
    axios
      .patch(`slot_post/users/posts/create/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data.image);
        navigate("/");
      })
      .catch((error) => setError("Please choose an image"));
  };

  const imageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className=' p-20 bg-green-100 flex flex-col items-center'>
        <div className="bg-white w-full md:w-3/4 lg:w-1/2 xl:w-1/3 p-8 rounded-lg shadow-md">
          <div className="flex flex-col items-center">
            <img src={image} alt="User Avatar" className="w-32 h-32 rounded-full mb-4" />
            <h1 className="text-2xl font-semibold">Edit User</h1>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <input
              type="text"
              name="description"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 rounded-md w-full"
              maxLength="150"
            />
          <form className="mt-4" encType="multipart/form-data" onSubmit={updateImage}>
            <div className="mb-4">
              <p>{name}</p>
            </div>
            <div className="mb-4">
              <p>{email}</p>
            </div>
            <div className="mb-4">
              <p>{phonenumber}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Upload Images:</label>
              <input
                type="file"
                name="image"
                className="hidden"
                ref={fileRef}
                accept="image/*"
                onChange={imageUpload}
              />
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                onClick={() => fileRef.current.click()}
              >
                Choose Image
              </button>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            >
              Save Changes
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
