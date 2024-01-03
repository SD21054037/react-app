import "./header.css"

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <div className="logo">
        <img className="rectangle-1" src="/public/Images/rectangle-10.png" />
      </div>
      <button className="HeaderButton">
        <div className="onderzoeken">Onderzoeken </div>
        <img className="user-groups" src="/public/Images/user-groups0.png" />
      </button>
      <button className="HeaderButton">
        <div className="chat">Chat </div>
        <img
          className="chat-messages"
          src="/public/Images/chat-messages0.png"
        />
      </button>
      <div className="profile-settings-notification">
        <button className="NotificationButton">
          <img
            className="notification"
            src="/public/Images/notification0.png"
          />
        </button>
        <button className="ProfileButton">
          <img className="profile" src="/public/Images/male-user0.png" />
        </button>
      </div>
    </div>
  );
};

export default Header;
