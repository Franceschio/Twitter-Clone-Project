import "./index.css";

import TrendsUsersPostsList from "../TrendsUsers/TrendsUsers";

import TrendsPosts from "../TrendsPosts/TrendsPosts";

const Trends = () => {
  return (
    <div className="Trends">
      <h3>Trends</h3>
      {TrendsUsersPostsList.map((user) => (
        <TrendsPosts postData={user} key={user.id} />
      ))}
    </div>
  );
};

export default Trends;
