import "./index.css";

import UsersPostsList from "../UsersPostsMock/UsersPostsList";
import Post from "../Posts/Posts";

const PostsList = () => {
  return (
    <div className="PostsList">
      {UsersPostsList.map((user) => (
        <Post Postdata={user} key={user.id} />
      ))}
    </div>
  );
};

export default PostsList;
