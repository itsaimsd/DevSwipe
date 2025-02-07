// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/contants";
// import { removeUser } from "../utils/userSlice";

// const NavBar = () => {
//   const user = useSelector((store) => store.user);
//   const dispatch = useDispatch((store) => store.dispatch);
//   const navigate = useNavigate();
//   const handleLogout = async () => {
//     try {
//       await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
//       dispatch(removeUser());
//       navigate("/login");
//     } catch (err) {
//       // Error logic may be redirect to login page
//     }
//   };

//   return (
//     <div className="navbar bg-base-200">
//       <div className="flex-1">
//         <Link to="/" className="btn btn-ghost text-xl">
//           💗 DevSwipe 💕
//         </Link>
//       </div>

//       {user && (
//         <div>
//           <ul className="menu menu-vertical lg:menu-horizontal bg-base-300 rounded-box mx-10">
//             <li className="mx-4">
//               <Link to="/connections">Connections</Link>
//             </li>
//             <li>
//               <Link to="/requests">Requests</Link>
//             </li>{" "}
//             <li className="mx-4">
//               <Link to="/message">Message</Link>
//             </li>
//           </ul>
//         </div>
//       )}

//       {user && (
//         <div className="flex-none gap-2">
//           <div className="form-control">Welcome. {user.firstName}</div>
//           <div className="dropdown dropdown-end mx-5">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img alt="user photo" src={user.photoUrl} />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               <li>
//                 <Link to="/profile" className="justify-between">
//                   Profile
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a onClick={handleLogout}>Logout</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;


import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/contants";
import { removeUser } from "../utils/userSlice";
import { FaUserFriends, FaUserPlus, FaEnvelope, FaHeart, FaUsers } from "react-icons/fa";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch((store) => store.dispatch);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(BASE_URL + "/logout", {}, { withCredentials: true });
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {
      // Error logic may be redirect to login page
    }
  };

  return (
    <div className="navbar bg-gradient-to-r from-pink-400 via-red-400 to-purple-500 flex justify-between items-center p-1 fixed top-0 left-0 w-full shadow-lg z-10">
      <div className="flex-1">
        <div>
          <Link to="/" className="btn btn-ghost text-2xl hidden lg:flex items-center gap-2 text-white">
            💗 DevSwipe 💕
          </Link>
          <p className="text-xs italic text-gray-200 text-center mt-1 hidden lg:block">"Code your love story"</p>
          <Link to="/" className="btn btn-ghost text-xl lg:hidden">
            <FaUsers size={24} className="text-white animate-bounce" />
          </Link>
        </div>
      </div>

      {user && (
        <div className="flex items-center gap-4">
          {/* Links in a single row with tighter spacing */}
          <ul className="menu menu-horizontal bg-base-300 rounded-lg flex gap-3 shadow-md">
            <li>
              <Link to="/connections" title="Connections">
                <FaUserFriends size={20} className="text-white hover:text-pink-300 transition-all" />
              </Link>
            </li>
            <li>
              <Link to="/requests" title="Requests">
                <FaUserPlus size={20} className="text-white hover:text-pink-300 transition-all" />
              </Link>
            </li>
            <li>
              <Link to="/message" title="Messages">
                <FaEnvelope size={20} className="text-white hover:text-pink-300 transition-all" />
              </Link>
            </li>
          </ul>

          {/* Welcome message, hidden on mobile */}
          <div className="hidden lg:block">
            <span className="text-sm text-pink-200 italic">Welcome, {user.firstName}</span>
          </div>

          {/* User Avatar */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full border-4 border-pink-300 shadow-md">
                <img alt="user photo" src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-52 p-2"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
