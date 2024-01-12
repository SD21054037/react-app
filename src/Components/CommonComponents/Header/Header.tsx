import "./header.css";

export const Header = (): JSX.Element => {



  
  return (
    <div className="header">
      <div className="logo">
        <img
          className="rectangle-1"
          src="/public/Images/rectangle-10.png"
          aria-label="logo accesssibility"
        />
      </div>
      <button className="HeaderButton">
        <div className="onderzoeken">Onderzoeken </div>
        <img
          className="user-groups"
          src="/public/Images/user-groups0.png"
          aria-label="Onderzoeken"
        />
      </button>
      <button className="HeaderButton">
        <div className="chat">Chat </div>
        <img
          className="chat-messages"
          src="/public/Images/chat-messages0.png"
          aria-label="berichten"
        />
      </button>
      <div className="profile-settings-notification">
        <button className="NotificationButton">
          <img
            className="notification"
            src="/public/Images/notification0.png"
            aria-label="Notificaties"
          />
        </button>
        <button className="ProfileButton">
          <img
            className="profile"
            src="/public/Images/male-user0.png"
            aria-label="Profiel"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
