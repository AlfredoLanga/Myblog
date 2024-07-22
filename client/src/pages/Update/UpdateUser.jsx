import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginFecth from '../../assets/axios/config';
import profile from '/images/20201106_225150.jpg';
function EditUserPage() {
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold mb-6 text-gray-800">Edit User</h2>
        <img className='rounded-full w-32 bg-black object-cover mx-auto' src={profile} alt="" />
        <div>
            <label htmlFor="file" className="block text-sm font-medium text-gray-700">Select Photo</label>
            <input
              id="file"
              type="file"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              required
            />
          </div>
        <form  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="text"
           
             
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
    
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'  htmlFor="user_role">User Role</label>
            <select className=' bg-indigo-500  w-full px-3 py-2 rounded-md' name="user_role" id="user_role">
                <option className='' value={3}>User</option>
                <option className='' value={2}>Editor</option>
                <option className='' value={1}>Admin</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
            <button
              type="button"

              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUserPage;
