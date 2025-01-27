import axios from "axios";
import { BASE_URL } from "../utils/contants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  //   const connections = [
  //     {
  //       firstName: "Alice",
  //       lastName: "Johnson",
  //       photoUrl: "https://via.placeholder.com/150",
  //       age: 28,
  //       gender: "Female",
  //       about: "Frontend developer with a love for UI/UX design.",
  //     },
  //     {
  //       firstName: "Bob",
  //       lastName: "Smith",
  //       photoUrl: null, // No photo available
  //     //   age: 35,
  //       gender: "Male",
  //       about: "Backend developer passionate about open-source contributions.",
  //     },
  //     {
  //       firstName: "Charlie",
  //       lastName: "Brown",
  //       photoUrl: "https://via.placeholder.com/150",
  //       age: 30,
  //       gender: "Non-binary",
  //       about: "Digital marketer focused on content strategy.",
  //     },
  //   ];

  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Error fetching connections:", err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return <h1 className="text-center my-10">Loading...</h1>;
  if (connections.length === 0)
    return <h1 className="text-center my-10">No Connections Found</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-bold text-3xl mb-8">My Connections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;
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
                  <button className="btn btn-primary w-32">Remove</button>
                  <button className="btn btn-secondary w-32"> Message</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
