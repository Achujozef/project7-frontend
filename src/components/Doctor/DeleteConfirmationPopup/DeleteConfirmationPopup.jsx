import React from "react";

const DeleteConfirmationPopup = ({ onCancel, onConfirm }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <p>Are you sure you want to delete this post?</p>
      <div className="flex justify-end mt-2">
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2"
          onClick={onConfirm}
        >
          Confirm
        </button>
        <button
          className="bg-red-500 text-white rounded-md px-4 py-2"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmationPopup;