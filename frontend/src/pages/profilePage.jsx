import React from "react";
import { useSelector } from "react-redux";

const ProfilePage = () => {

  const user = useSelector((state) => state.user.user);

  return (
    <div className="mt-24 flex justify-center">

      <div className="bg-white shadow-lg rounded-xl w-96 p-6">

        <div className="flex flex-col items-center">

          <img
            src={user?.profilePic}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover mb-4"
          />

          <h2 className="text-xl font-semibold">
            {user?.name}
          </h2>

          <p className="text-gray-500 text-sm">
            {user?.email}
          </p>

        </div>

        <div className="mt-6 flex flex-col gap-3">

          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Edit Profile
          </button>

          <button className="bg-gray-200 py-2 rounded-lg hover:bg-gray-300">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProfilePage;
