import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/contants";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { useEffect, useState } from "react";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      const res = axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {}
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res.data.data);

      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return <h1 className="text-center my-10">Loading...</h1>;
  if (requests.length === 0)
    return <h1 className="text-center my-10">No Request Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl mb-8">Request</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {requests.map((request) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="card w-full bg-base-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <figure className="p-4">
                <img
                  src={photoUrl || "https://via.placeholder.com/150"}
                  alt="User"
                  className="w-24 h-24 rounded-full mx-auto"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <h2 className="card-title text-xl font-bold">
                    {firstName} {lastName}
                  </h2>

                  {age && gender && (
                    <div className="flex justify-end items-center space-x-1">
                      <span className="text-gray-600 text-sm">
                        <span className="font-medium"></span> {age}
                      </span>
                      <span className="text-gray-600 text-sm">
                        <span className="font-medium"></span> {gender}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-500 text-sm mt-4">{about}</p>

                <div className="card-actions justify-center mt-4">
                  <button
                    className="btn btn-primary w-32"
                    onClick={() => reviewRequest("rejected", request._id)}
                  >
                    Reject
                  </button>
                  <button
                    className="btn btn-secondary w-32"
                    onClick={() => reviewRequest("accepted", request._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Requests;
