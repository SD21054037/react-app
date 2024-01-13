import "./header.css";

export const Header = (): JSX.Element => {
  
  return (
    <nav className="header">
      <a href="/mainpage" className="logo">
        <img
          className="rectangle-1"
          src="/public/Images/logo.png"
          aria-label="logo accesssibility"
        />
      </a>
      <button className="HeaderButton">
        <img
          className="user-groups"
          src="/public/Images/user-groups0.png"
          aria-label="Onderzoeken"
        />
        <div className="onderzoeken">Onderzoeken </div>
      </button>
      <button className="HeaderButton">
        <img
          className="chat-messages"
          src="/public/Images/chat-messages0.png"
          aria-label="berichten"
        />
        <div className="chat">Chat </div>
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
    </nav>
  );
};

export default Header;
