// import axios from "axios";
// import React from "react";
// import { BASE_URL } from "../utils/contants";
// import { useDispatch } from "react-redux";
// import { removeUserFromFeed } from "../utils/feedSlice";

// const UserCard = ({ user }) => {
//   const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
//   const dispatch = useDispatch();

//   const handleSendRequest = async (status, userId) => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/request/send/" + status + "/" + userId,
//         {},
//         { withCredentials: true }
//       );
//       dispatch(removeUserFromFeed(userId));
//     } catch (err) {}
//   };

//   return (
//     <div className="card w-96 bg-base-200 shadow-xl">
//       <figure className="h-56 overflow-hidden">
//         <img
//           src={photoUrl}
//           alt={`${photoUrl}'s Photo`}
//           className="object-cover w-full h-full"
//         />
//       </figure>
//       <div className="card-body p-6">
//         <h2 className="card-title text-2xl font-bold">
//           {firstName} {lastName}
//         </h2>
//         {age && gender && (
//           <p className="text-gray-500 text-sm">
//             <span className="font-semibold">Age:</span> {age},{" "}
//             <span className="font-semibold">Gender:</span> {gender},{" "}
//           </p>
//         )}

//         <p className="text-gray-700 mt-2">
//           {about || "No additional information available."}
//         </p>
//         <div className="card-actions justify-center mt-4">
//           <button
//             className="btn btn-primary w-28"
//             onClick={() => handleSendRequest("ignored", _id)}
//           >
//             Ignore
//           </button>
//           <button
//             className="btn btn-secondary w-28"
//             onClick={() => handleSendRequest("interested", _id)}
//           >
//             Interested
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserCard;



import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../utils/contants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";
import { motion, AnimatePresence } from "framer-motion";

const UserCard = ({ user }) => {
  const { _id, firstName, lastName, photoUrl, age, gender, about } = user;
  const dispatch = useDispatch();
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [resetPosition, setResetPosition] = useState(false);

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        `${BASE_URL}/request/send/${status}/${userId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (err) {
      console.error("Request failed", err);
    }
  };

  const handleSwipe = (direction) => {
    if (direction === "right") {
      handleSendRequest("interested", _id);
    } else if (direction === "left") {
      handleSendRequest("ignored", _id);
    }
    setResetPosition(true); // Trigger reset animation
    setTimeout(() => setResetPosition(false), 300); // Reset position after animation
  };

  return (
    <AnimatePresence>
      <motion.div
        className="card w-96 bg-base-200 shadow-xl relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={resetPosition ? { x: 0, opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
        exit={{ opacity: 0, x: swipeDirection === "right" ? 200 : -200 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        drag="x"
        dragElastic={0} // Prevent parent layout shift
        dragConstraints={{ left: -100, right: 100 }}
        onDrag={(event, info) => {
          if (info.offset.x > 50) setSwipeDirection("right");
          else if (info.offset.x < -50) setSwipeDirection("left");
          else setSwipeDirection(null);
        }}
        onDragEnd={(event, info) => {
          if (info.offset.x > 100) handleSwipe("right");
          if (info.offset.x < -100) handleSwipe("left");
          setSwipeDirection(null);
        }}
      >
        <figure className="h-56 overflow-hidden">
          <img
            src={photoUrl}
            alt={`${firstName}'s Photo`}
            className="object-cover w-full h-full"
          />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold">
            {firstName} {lastName}
          </h2>
          {age && gender && (
            <p className="text-gray-500 text-sm">
              <span className="font-semibold">Age:</span> {age},
              <span className="font-semibold"> Gender:</span> {gender}
            </p>
          )}
          <p className="text-gray-700 mt-2">
            {about || "No additional information available."}
          </p>
        </div>

        {swipeDirection === "left" && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-lg text-lg font-bold">
            IGNORE
          </div>
        )}
        {swipeDirection === "right" && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-4 rounded-lg text-lg font-bold">
            INTERESTED
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default UserCard;
