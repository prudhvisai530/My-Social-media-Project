import "./friends.css";

export default function Friends({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarImage" src={user.profilePicture} alt="" />
      <span>{user.username}</span>
    </li>
  );
}
