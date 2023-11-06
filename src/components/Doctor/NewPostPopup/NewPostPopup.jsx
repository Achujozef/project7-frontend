import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../action/userAction";

const NewPostPopup = ({ onClose }) => {
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
      .patch(`api/users/posts/create/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setImage(response.data.image);
        onClose();
      })
      .catch((error) => setError("Please choose an image"));
  };

  const imageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full p-8 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img src={image} alt="User Avatar" className="w-32 h-32 rounded-full mb-4" />
          <h1 className="text-2xl font-semibold">Create New Post</h1>
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

        </form>
      </div>
    </div>
  );
};

export default NewPostPopup;
