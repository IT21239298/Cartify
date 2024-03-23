
import React, { useState } from "react";


import contact from "../assets/images/contact.jpg";
import DefaultButton from "../components/home/DefaultButton";
import { useForm } from "react-hook-form";
import { useAddContactMutation } from "../components/Store/apiSlice";

// Simple Success Popup Component
const SuccessPopup = ({ onClose }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p className="text-green-600 text-lg font-bold">Form submitted successfully!</p>
      <button className="mt-4 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-800" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default function ContactUs({ ContactData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const [addContact] = useAddContactMutation();
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup

  const onSubmit = async (data) => {
    if (!data) return {};

    try {
      await addContact(data).unwrap(); // Assuming unwrap() returns the response data
      setShowSuccessPopup(true); // Show success popup on successful form submission
      reset(); // Reset the form fields after submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false); // Close success popup
  };

  return (
    <div className="bg-white py-8">
      <div className="container flex items-center justify-between mx-auto px-4">
      <div className="w-1/2 h-full">
          <img src={contact} alt="contact" className="max-w-full h-1000" />
        </div>


        <div className="w-1/2 h-full">
          <div className="bg-white min-h-screen flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

              <form id="form" onSubmit={handleSubmit(onSubmit)}>

              <div className="mb-4">
                  <label htmlFor="name" className="block text-xl text-left font-sans font-bold text-blue-950">
                    Name
                  </label>

                

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"

                    className={`mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm 
                      focus:border-blue-950 focus:ring-blue-950 ${
                        errors.name ? 'border-red-500' : '' // Apply red border if there is an error
                      }`}
                    {...register("name", {
                      required: 'Name is required',
                      pattern: {
                        value: /^[A-Za-z ]+$/,
                        message: 'Enter a valid name without special characters or numbers',
                      },
                    })}


                    className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-950 focus:ring-blue-950"
                    {...register("name")} // Use register from react-hook-form

                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div className="mb-4">

                  <label htmlFor="email" className="block text-xl text-left font-sans font-bold text-blue-950">
                    Email Address
                  </label>

                  <label htmlFor="email" className="block text-xl text-left font-sans font-bold text-blue-950">Email Address</label>

                   


                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"

                    className={`mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm 
                      focus:border-indigo-500 focus:ring-indigo-500 ${
                        errors.email ? 'border-red-500' : '' // Apply red border if there is an error
                      }`}
                    {...register("email", {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Enter a valid email address',
                      },
                    })}


                    className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    {...register("email")} // Use register from react-hook-form

                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div className="mb-4">

                  <label htmlFor="message" className="block text-xl text-left font-sans font-bold text-blue-950">
                    Message
                  </label>

                  <label htmlFor="message" className="block text-xl text-left font-sans font-bold text-blue-950">Message</label>


                  <textarea
                    id="message"
                    name="message"
                    rows="4"

                    maxLength={250} // Set max length to 250 characters
                    className={`mt-1 block w-full h-32 border-gray-300 rounded-md shadow-sm 
                      focus:border-indigo-500 focus:ring-indigo-500 ${
                        errors.message ? 'border-red-500' : '' // Apply red border if there is an error
                      }`}
                    {...register("message", { required: 'Message is required' })}


                    {...register("message")} // Use register from react-hook-form
                    className="mt-1 block w-full h-32 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"

                  ></textarea>
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message && errors.message.type === "required" && "Message is required"}
                    {errors.message && errors.message.type !== "required" && "Message must be less than 250 characters"}
                  </p>
                </div>

                <div>

                  <button
                    type="submit"
                    className="bg-primary border-primary text-white px-8 py-3 font-medium 
                      rounded-md hover:bg-blue-800 hover:text-white cursor-pointer"
                  >
                    Submit
                  </button>

                  <DefaultButton title="Submit" type="submit" />

                  

                </div>
              </form>
            </div>
          </div>

        {showSuccessPopup && <SuccessPopup onClose={closeSuccessPopup} />}
      </div>
    </div>
    </div>
  );
}

