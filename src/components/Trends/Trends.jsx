import "./index.css";

import TrendsUsersPostsList from "../TrendsUsers/TrendsUsers";

import TrendsPosts from "../TrendsPosts/TrendsPosts";

import { useRef, useState } from "react";

const Trends = () => {
  const scrollTrend = useRef(null);

  //Ho inserito un re-style della sezione trends, controllabile dall'utente tramite lo scroll, per renderla meno invadente durante lo scroll

  const [isScrolled, setScroll] = useState(false);

  return (
    <div
      className={`Trends ${isScrolled === true && "scrolled"}`}
      ref={scrollTrend}
      onScroll={() => {
        scrollTrend.current.scrollTop >= 670
          ? setScroll(true)
          : scrollTrend.current.scrollTop <= 10
          ? setScroll(false)
          : null;
        console.log(isScrolled);
      }}
    >
      <h3>Trends</h3>
      {TrendsUsersPostsList.map((user) => (
        <TrendsPosts postData={user} key={user.id} />
      ))}
    </div>
  );
};

export default Trends;
