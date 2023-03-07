import "./index.css";

import TrendsUsersPostsList from "../TrendsUsers/TrendsUsers";

import TrendsPosts from "../TrendsPosts/TrendsPosts";

const Trends = () => {
  return (
    <div className="Trends">
      <h1>Trends</h1>
      {TrendsUsersPostsList.map((user) => (
        <TrendsPosts postData={user} key={user.id} />
      ))}
    </div>
  );
};

export default Trends;
