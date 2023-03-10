import "./index.css";

import TrendsUsersPostsList from "../TrendsUsers/TrendsUsers";

import TrendsPosts from "../TrendsPosts/TrendsPosts";

import { useRef, useState } from "react";

const Trends = () => {
  //Ho inserito un re-style della sezione trends, controllabile dall'utente tramite lo scroll, per renderla meno invadente durante lo scroll

  return (
    <div className={`Trends`}>
      <h3>Trends</h3>
      {TrendsUsersPostsList.map((user) => (
        <TrendsPosts postData={user} key={user.id} />
      ))}
    </div>
  );
};

export default Trends;
