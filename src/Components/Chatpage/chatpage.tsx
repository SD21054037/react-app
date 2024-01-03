import "./chatpage.css";
import Header from "../Header/Header";

export interface IChatPage {
  classname?: string;
}

export const Chatpage = ({ classname, ...props }: IChatPage): JSX.Element => {
  return (
    <div className="ChatPage">
      <Header></Header>
      <div className="Content">
        <div className="ChatWindow">
        <div className="search-bar">
            <div className="content">
              <div className="cont">
                <div className="placeholder-label">zoek </div>
              </div>
            </div>
          </div>
          <div className="chats">
            <div className="nav-item-dropdown-base">
              <div className="nav-item-base">
                <div className="content2">
                  <div className="chatnaam">Chatnaam </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Chatraam"></div>
      </div>
    </div>
  );
};
 
