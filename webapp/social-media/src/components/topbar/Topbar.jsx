import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo">LeConnect</span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon"></Search>
          <input
            placeholder="Search for People,Posr and video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Home</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person className="topBarIcon"></Person>
            <span className="topBarBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat className="topBarIcon"></Chat>
            <span className="topBarBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Notifications className="topBarIcon"></Notifications>
            <span className="topBarBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topBarImg" />
      </div>
    </div>
  );
}
