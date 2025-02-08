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

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { BASE_URL } from "../utils/contants";
// import { useDispatch } from "react-redux";
// import { removeUserFromFeed } from "../utils/feedSlice";
// import { motion, AnimatePresence } from "framer-motion";

// const UserCard = ({ user }) => {
//   const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
//   const dispatch = useDispatch();
//   const [swipeDirection, setSwipeDirection] = useState(null);
//   const [resetPosition, setResetPosition] = useState(false);

//   useEffect(() => {
//     // Reset swipe direction and position when a new user card is mounted
//     setSwipeDirection(null);
//     setResetPosition(false);
//   }, [user]);

//   const handleSendRequest = async (status, userId) => {
//     try {
//       await axios.post(
//         BASE_URL + "/request/send/" + status + "/" + userId,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeUserFromFeed(userId));
//     } catch (err) {
//       console.error("Request failed", err);
//     }
//   };

//   const handleSwipe = (direction) => {
//     if (direction === "up") {
//       handleSendRequest("interested", _id);
//     } else if (direction === "down") {
//       handleSendRequest("ignored", _id);
//     }
//     setResetPosition(true); // Trigger reset animation
//     setTimeout(() => setResetPosition(false), 300); // Reset position after animation
//   };

//   return (
//     <div className="absolute inset-0 flex justify-center items-center">
//       <AnimatePresence>
//         <motion.div
//           key={_id} // Unique key to manage component lifecycle
//           className="card w-96 bg-base-200 shadow-xl relative"
//           initial={{ rotate: -10, opacity: 0 }}
//           animate={{ rotate: 0, opacity: 1 }}
//           // exit={{ rotate: 10, opacity: 0 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//           drag="y"
//           dragElastic={0} // Prevent parent layout shift
//           dragConstraints={{ top: -100, bottom: 100 }}
//           onDrag={(event, info) => {
//             if (info.offset.y < -50) setSwipeDirection("up");
//             else if (info.offset.y > 50) setSwipeDirection("down");
//             else setSwipeDirection(null);
//           }}
//           onDragEnd={(event, info) => {
//             if (info.offset.y < -100) handleSwipe("up");
//             if (info.offset.y > 100) handleSwipe("down");
//             setSwipeDirection(null);
//           }}
//         >
//           <figure className="h-56 overflow-hidden">
//             <img
//               src={photoUrl}
//               alt={`${firstName}'s Photo`}
//               className="object-cover w-full h-full"
//             />
//           </figure>
//           <div className="card-body p-6">
//             <h2 className="card-title text-2xl font-bold">
//               {firstName} {lastName}
//             </h2>
//             {age && gender && (
//               <p className="text-gray-500 text-sm">
//                 <span className="font-semibold">Age:</span> {age},
//                 <span className="font-semibold"> Gender:</span> {gender}
//               </p>
//             )}
//             <p className="text-gray-700 mt-2">
//               {about || "No additional information available."}
//             </p>
//           </div>

//           {swipeDirection === "down" && (
//             <div className="absolute inset-0 flex justify-center items-center">
//               <div className="bg-red-500 text-white p-6 rounded-lg text-3xl font-bold">
//                 IGNORE
//               </div>
//             </div>
//           )}
//           {swipeDirection === "up" && (
//             <div className="absolute inset-0 flex justify-center items-center">
//               <div className="bg-green-500 text-white p-6 rounded-lg text-3xl font-bold">
//                 INTERESTED
//               </div>
//             </div>
//           )}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default UserCard;
