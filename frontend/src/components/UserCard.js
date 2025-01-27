import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {}
  };

  return (
    <div className="card w-96 bg-base-200 shadow-xl">
      <figure className="h-56 overflow-hidden">
        <img
          src={photoUrl}
          alt={`${photoUrl}'s Photo`}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body p-6">
        <h2 className="card-title text-2xl font-bold">
          {firstName} {lastName}
        </h2>
        {age && gender && (
          <p className="text-gray-500 text-sm">
            <span className="font-semibold">Age:</span> {age},{" "}
            <span className="font-semibold">Gender:</span> {gender},{" "}
          </p>
        )}

        <p className="text-gray-700 mt-2">
          {about || "No additional information available."}
        </p>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary w-28"
            onClick={() => handleSendRequest("ignored", _id)}
          >
            Ignore
          </button>
          <button
            className="btn btn-secondary w-28"
            onClick={() => handleSendRequest("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
