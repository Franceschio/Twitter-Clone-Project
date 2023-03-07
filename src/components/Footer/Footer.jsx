import "./index.css";

const Footer = () => {
  return (
    <div className="Footer">
      <ul className="footerToolsList">
        <li>
          <img
            src="https://img.icons8.com/pulsar-line/256/home-page.png"
            alt="home"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/material-sharp/512/search.png"
            alt="search"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/material/256/jingle-bell.png"
            alt="notifications"
          />
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/256/filled-chat.png"
            alt="messages"
          />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
