import {
  RssFeed,
  Chat,
  PlayCircleFilled,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  School,
  Event,
} from "@mui/icons-material";
import "./leftbar.css";

export default function Leftbar() {
  return (
    <div className="leftBar">
      <div className="leftbarWrapper">
        <ul className="leftbarListItems">
          <li className="leftbarListItem">
            <RssFeed className="leftbarIcon" />
            <span className="iconName">Feed</span>
          </li>
          <li className="leftbarListItem">
            <Chat className="leftbarIcon" />
            <span className="iconName">Chats</span>
          </li>
          <li className="leftbarListItem">
            <PlayCircleFilled className="leftbarIcon" />
            <span className="iconName">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon" />
            <span className="iconName">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon" />
            <span className="iconName">Bookmark</span>
          </li>
          <li className="leftbarListItem">
            <HelpOutline className="leftbarIcon" />
            <span className="iconName">Questions</span>
          </li>
          <li className="leftbarListItem">
            <WorkOutline className="leftbarIcon" />
            <span className="iconName">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon" />
            <span className="iconName">Events</span>
          </li>
          <li className="leftbarListItem">
            <School className="leftbarIcon" />
            <span className="iconName">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sideBarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarImage" src="/assets/person/2.jpeg" alt="" />
            <span>jhon doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
