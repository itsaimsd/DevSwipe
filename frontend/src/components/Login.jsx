// import axios from "axios";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";
// import { BASE_URL } from "../utils/contants";

// const Login = () => {
//   const [emailId, setEmailId] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [isLoginForm, setIsLoginForm] = useState(true);

//   const [error, setError] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/login",
//         {
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       // console.log();
//       dispatch(addUser(res.data));
//       return navigate("/");
//     } catch (err) {
//       setError(err?.response?.data || "Something went wrong");
//     }
//   };

//   const handleSignUp = async () => {
//     try {
//       const res = await axios.post(
//         BASE_URL + "/signup",
//         {
//           firstName,
//           lastName,
//           emailId,
//           password,
//         },
//         { withCredentials: true }
//       );
//       console.log(res.data);

//       dispatch(addUser(res.data.data));
//       return navigate("/profile");
//     } catch (err) {
//       setError(err?.response?.data || "Something went wrong");
//     }
//   };

//   return (
//     <div className="flex justify-center m-10">
//       <div className="card bg-base-300 w-96 shadow-xl">
//         <div className="card-body">
//           <h2 className="card-title justify-center">
//             {isLoginForm ? "Login" : "SignUp"}
//           </h2>
//           <div>
//             {!isLoginForm && (
//               <>
//                 <label className="form-control w-full max-w-xs my-1">
//                   <div className="label">
//                     <span className="label-text">First Name:</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={firstName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setFirstName(e.target.value)}
//                   />
//                 </label>{" "}
//                 <label className="form-control w-full max-w-xs my-1">
//                   <div className="label">
//                     <span className="label-text">Last Name</span>
//                   </div>
//                   <input
//                     type="text"
//                     value={lastName}
//                     className="input input-bordered w-full max-w-xs"
//                     onChange={(e) => setLastName(e.target.value)}
//                   />
//                 </label>
//               </>
//             )}
//             <label className="form-control w-full max-w-xs my-1">
//               <div className="label">
//                 <span className="label-text">Email Id</span>
//               </div>
//               <input
//                 type="text"
//                 value={emailId}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setEmailId(e.target.value)}
//               />
//             </label>{" "}
//             <label className="form-control w-full max-w-xs my-1">
//               <div className="label">
//                 <span className="label-text">Password</span>
//               </div>
//               <input
//                 type="text"
//                 value={password}
//                 className="input input-bordered w-full max-w-xs"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//           </div>
//           <p className="text-red-500">{error}</p>
//           <div className="card-actions justify-center m-2">
//             <button
//               className="btn btn-primary"
//               onClick={isLoginForm ? handleLogin : handleSignUp}
//             >
//               {isLoginForm ? "Login" : "Sign Up"}
//             </button>
//           </div>

//           <p
//             className="py-4 text-center text-sm underline text-gray-400 hover:text-white cursor-pointer transition duration-300"
//             onClick={() => setIsLoginForm((value) => !value)}
//           >
//             {isLoginForm
//               ? "New to DevSwipe ? Sign Up Now"
//               : "Already registered? Login Now."}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/contants";

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="card bg-base-300 w-full max-w-md shadow-xl p-6">
        <div className="card-body">
          <h2 className="card-title text-center text-xl font-bold">
            {isLoginForm ? "Login" : "Sign Up"}
          </h2>
          <div className="space-y-4">
            {!isLoginForm && (
              <>
                <label className="form-control w-full">
                  <span className="label-text">First Name:</span>
                  <input
                    type="text"
                    value={firstName}
                    className="input input-bordered w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
                <label className="form-control w-full">
                  <span className="label-text">Last Name</span>
                  <input
                    type="text"
                    value={lastName}
                    className="input input-bordered w-full"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </>
            )}
            <label className="form-control w-full">
              <span className="label-text">Email Id</span>
              <input
                type="email"
                value={emailId}
                className="input input-bordered w-full"
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full">
              <span className="label-text">Password</span>
              <input
                type="password"
                value={password}
                className="input input-bordered w-full"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
          <div className="card-actions flex flex-col items-center mt-4">
            <button
              className="btn btn-primary w-full py-2 text-lg"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "Sign Up"}
            </button>
          </div>
          <p
            className="text-center text-sm underline text-gray-500 hover:text-white cursor-pointer mt-4 transition duration-300"
            onClick={() => setIsLoginForm((prev) => !prev)}
          >
            {isLoginForm
              ? "New to DevSwipe? Sign Up Now"
              : "Already registered? Login Now."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
