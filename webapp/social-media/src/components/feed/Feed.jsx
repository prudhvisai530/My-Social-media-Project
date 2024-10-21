import "./feed.css";
import Share from "../share/Share";
import Posts from "../posts/Posts";
import { PostsData } from "../../dummyData";

export default function feed() {
  return (
    <div className="feed">
      <Share />
      {PostsData.map((p) => (
        <Posts key={p.userId} post={p}></Posts>
      ))}
    </div>
  );
}
