import React from 'react'

function ContactUs() {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" name="message" rows="4"
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
        </div>
        <div className="flex justify-center"> {/* Center the button */}
            <button type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">Submit</button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default ContactUs