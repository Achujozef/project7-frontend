// CreateNewPostPopup.js

import React, { useState } from "react";
import axios from 'axios'
import {useSelector } from "react-redux";

const CreateNewPostPopup = ({ onClose }) => {

  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  const user = useSelector((state) => state.login.user);


  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('photo',image)
    formData.append('title', title); 
    formData.append('description',description)
    formData.append('doctor_id',user.id)
    try{
        await axios.post('http://localhost:8003/api/posts/', formData,{
            headers:{
                'Content-Type':'multipart/form-data',
            },
        })
        setImage(null);
        setTitle("");
        setDescription('')

    }catch(error){
        console.error("Error Creating Post :",error)
    }
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/2 p-4 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
        <div className="mb-4">
      <label htmlFor="title" className="block font-semibold mb-2">
        Title:
      </label>
      <input
        type="text"
        id="title"
        className="w-full p-2 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
        <div className="mb-4">
          <label htmlFor="image" className="block font-semibold mb-2">
            Upload Image:
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block font-semibold mb-2">
            Description:
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={handleSubmit}
          >
            Create
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPostPopup;
