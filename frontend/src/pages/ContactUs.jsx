
import React from 'react';
import contact from "../assets/images/contact.jpg";
import DefaultButton from '../components/home/DefaultButton';
import { useForm } from "react-hook-form";
import {default as api} from "../components/Store/apiSlice"

export default function ContactUs({ ContactData }) {
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({ });

  const [addContact] = api.useAddContactMutation();
  
  const onSubmit = async(data) =>{
    if(!data) return{};
    await addContact(data).unwrap();
    resetField("name");
    resetField("email");
    resetField("message");
  }

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
                  <label htmlFor="name" className="block text-xl text-left font-sans font-bold text-blue-950">Name</label>

            
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"

                    className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-blue-950 focus:ring-blue-950"
                    {...register("name")} // Use register from react-hook-form
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xl text-left font-sans font-bold text-blue-950">Email Address</label>

                   

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email address"

                    className="mt-1 block w-full h-12 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    {...register("email")} // Use register from react-hook-form
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-xl text-left font-sans font-bold text-blue-950">Message</label>

                  <textarea
                    id="message"
                    name="message"
                    rows="4"

                    {...register("message")} // Use register from react-hook-form
                    className="mt-1 block w-full h-32 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  ></textarea>
                </div>
                <div>
                  <DefaultButton title="Submit" type="submit" />

                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

