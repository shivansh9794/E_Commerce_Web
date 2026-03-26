import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { url } from '../config/KeyConfig';

const AllUsers = () => {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, [])

  const getAllUsers = async () => {
    console.log("getting All Users");
    try {
      const res = await axios.get(`${url}/api/user/getAllUsers`, { withCredentials: true })
      toast.success("User Fetched")
      console.log(res);
      SetUsers(res.data.user);
    } catch (error) {
      toast.error("Fetching User Failed...")
    }
  }
  return (
  
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">
        All Users
      </h1>

      <div className="overflow-x-auto rounded-lg">
        <table className="min-w-full border border-gray-200 bg-white shadow-lg">

          {/* Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Type</th>
              <th className="py-3 px-4 text-left">Delete</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {users?.map((u, index) => (
              <tr
                key={u._id}
                className={`border-b hover:bg-red-100 transition ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  }`}
              >
                <td className="py-3 px-4 text-sm text-gray-700">
                  {u._id}
                </td>
                <td className="py-3 px-4 font-medium text-gray-900">
                  {u.name}
                </td>
                <td className="py-3 px-4 text-gray-700">
                  {u.email}
                </td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">
                    {u.type}
                  </span>
                </td>

                <td><button className='bg-red-400 rounded-full px-1 hover:bg-red-600 hover:cursor-pointer'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers