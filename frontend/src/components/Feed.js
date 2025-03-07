import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/contants";
import { addFeed } from "../utils/feedSlice";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(res?.data);
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  if (!feed) return;
  if (feed.length <= 0) return <h1>No New User Found</h1>;
  return (
    feed && (
      <div className="mt-48 flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
