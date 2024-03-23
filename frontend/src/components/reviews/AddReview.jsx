import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
   
  },
  "& .MuiDialogActions-root": {
   
  },
}));

export default function AddReview({ open, setOpen, productData }) {
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewDescription, setReviewDescription] = useState("");
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(0);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  };

  const handleSelectImageClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log("Review Title:", reviewTitle);
    console.log("Review Description:", reviewDescription);
    console.log("Image:", image);
    console.log("Rating:", rating);
    // Reset form fields
    setReviewTitle("");
    setReviewDescription("");
    setImage(null);
    setRating(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async (e) => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
    // Reset form fields
    setReviewTitle("");
    setReviewDescription("");
    setImage(null);
    setRating(0);
  };

  return (
    <div>
      <BootstrapDialog onClose={handleClose} open={open}>
        <div >
          <div className=" p-3 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="reviewTitle"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Review Title
                </label>
                <input
                  type="text"
                  id="reviewTitle"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="reviewDescription"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Review Description
                </label>
                <textarea
                  id="reviewDescription"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={reviewDescription}
                  onChange={(e) => setReviewDescription(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="image"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Upload Image
                </label>
                <div
                  id="image"
                  className="border-dashed border-2 border-gray-400 rounded-lg p-6 flex flex-col items-center cursor-pointer"
                  onDragOver={handleDragOver}
                  onClick={handleSelectImageClick}
                  onDrop={handleDrop}
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Uploaded"
                      className="max-w-full h-auto mb-4"
                    />
                  ) : (
                    <span className="text-gray-500">
                      Drag &amp; Drop your image here or click to select
                    </span>
                  )}

                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
                    accept="image/*"
                  />
                </div>
              </div>
            </form>
            <div className="">
              <div  className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mt-4 ">
              <button
                type="submit"
                 className="ml-32"
                onClick={handleSubmit}
              >
                Submit Review
              </button>
             
             
              </div>
              <div className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4  ">
              <button
                type="button"
                className="ml-36 "
                onClick={handleCancel}
              >
                Cancel
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </BootstrapDialog>
    </div>
  );
}

AddReview.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  productData: PropTypes.object,
};