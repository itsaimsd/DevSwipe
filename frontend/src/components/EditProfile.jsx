// import React, { useState } from "react";
// import UserCard from "./UserCard";
// import axios from "axios";
// import { BASE_URL } from "../utils/contants";
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux";

// const EditProfile = ({ user }) => {
//   const [firstName, setFirstName] = useState(user.firstName);
//   const [lastName, setLastName] = useState(user.lastName);
//   const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
//   const [age, setAge] = useState(user.age || "");
//   const [gender, setGender] = useState(user.gender || "");
//   const [about, setAbout] = useState(user.about || "");
//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const [showToast, setShowToast] = useState(false);

//   const saveProfile = async () => {
//     setError();
//     try {
//       const res = await axios.patch(
//         BASE_URL + "/profile/edit",
//         { firstName, lastName, photoUrl, age, gender, about },
//         { withCredentials: true }
//       );
//       dispatch(addUser(res?.data?.data));
//       setShowToast(true);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 2000);
//     } catch (err) {
//       setError(err.response.data);
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center m-10">
//         <div className="card bg-base-300 w-96 shadow-xl mx-10">
//           <div className="card-body">
//             <h2 className="card-title justify-center">Edit Profile</h2>
//             <div>
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">First Name:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={firstName}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </label>{" "}
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">Last Name:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={lastName}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </label>{" "}
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">Photo URL:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={photoUrl}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setPhotoUrl(e.target.value)}
//                 />
//               </label>{" "}
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">Age:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={age}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setAge(e.target.value)}
//                 />
//               </label>{" "}
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">Gender:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={gender}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setGender(e.target.value)}
//                 />
//               </label>{" "}
//               <label className="form-control w-full max-w-xs my-1">
//                 <div className="label">
//                   <span className="label-text">About:</span>
//                 </div>
//                 <input
//                   type="text"
//                   value={about}
//                   className="input input-bordered w-full max-w-xs"
//                   onChange={(e) => setAbout(e.target.value)}
//                 />
//               </label>{" "}
//             </div>
//             <p className="text-red-500">{error}</p>
//             <div className="card-actions justify-center m-2">
//               <button className="btn btn-primary" onClick={saveProfile}>
//                 Save Profile
//               </button>
//             </div>
//           </div>
//         </div>
//         <UserCard
//           user={{ firstName, lastName, photoUrl, age, gender, about }}
//         />
//       </div>
//       {showToast && (
//         <div className="toast toast-top toast-center">
//           <div className="alert alert-success">
//             <span>Profile Update Successful</span>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default EditProfile;


import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/contants";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "");
  const [about, setAbout] = useState(user.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  const saveProfile = async () => {
    setError();
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoUrl, age, gender, about },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 flex flex-col items-center justify-center">
      <div className="mt-20 mb-20 flex flex-col lg:flex-row justify-center items-start lg:items-center gap-10 lg:gap-20">
        {/* Form Section */}
        <div className="card bg-white bg-opacity-80 w-full lg:w-96 shadow-lg rounded-2xl p-6">
          <div className="card-body">
            <h2 className="card-title justify-center text-2xl font-bold text-gray-700 mb-6">
              Edit Profile
            </h2>
            <div className="space-y-4">
              <label className="form-control w-full">
                <span className="label-text text-gray-600">First Name:</span>
                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-gray-600">Last Name:</span>
                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-gray-600">Photo URL:</span>
                <input
                  type="text"
                  value={photoUrl}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-gray-600">Age:</span>
                <input
                  type="text"
                  value={age}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-gray-600">Gender:</span>
                <input
                  type="text"
                  value={gender}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
              <label className="form-control w-full">
                <span className="label-text text-gray-600">About:</span>
                <input
                  type="text"
                  value={about}
                  className="input input-bordered w-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-lg"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>
            <p className="text-red-500 text-sm mt-2">{error}</p>
            <div className="card-actions justify-center mt-6">
              <button
                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-lg w-full"
                onClick={saveProfile}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>

        {/* UserCard Section */}
        <div className="w-full lg:w-auto">
          <UserCard
            user={{ firstName, lastName, photoUrl, age, gender, about }}
          />
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast toast-top toast-center fixed z-50">
          <div className="alert alert-success">
            <span>Profile Update Successful</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
