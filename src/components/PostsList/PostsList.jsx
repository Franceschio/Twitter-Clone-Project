import "./index.css";

import { useEffect, useState } from "react";

import Post from "../Posts/Posts";

const PostsList = () => {
  const [UsersPostsList, setUsersPostsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setUsersPostsList(data.posts));
  }, []);

  return (
    <div className="PostsList">
      {UsersPostsList.map((user) => (
        <Post Postdata={user} key={user.id} />
      ))}
    </div>
  );
};

export default PostsList;
