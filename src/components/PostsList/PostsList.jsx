import "./index.css";

import { useEffect, useState } from "react";

import Post from "../Posts/Posts";

const PostsList = ({ filteredInput, setModalOpen, setpostId }) => {
  const [UsersPostsList, setUsersPostsList] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setUsersPostsList(data.posts));
  }, []);

  const filteredUsers = UsersPostsList.filter((post) =>
    post.body.includes(filteredInput)
  );

  return (
    <div className="PostsList">
      {filteredUsers.map((user) => (
        <Post
          Postdata={user}
          key={user.id}
          setModalOpen={setModalOpen}
          setpostId={setpostId}
        />
      ))}
    </div>
  );
};

export default PostsList;
