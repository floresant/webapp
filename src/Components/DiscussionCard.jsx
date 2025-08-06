import { CircleUserRound, Eye, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import "../Styles/DiscussionCard.css";

function DiscussionCard() {
  const [likes, setLikes] = useState(10);
  const [views, setViews] = useState(15);
  const [replies, setReplies] = useState(33);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
        setLikes((prev) => prev + 1);
    } else {
        setLikes((prev) => prev - 1);
    }
    setLiked((prev) => !prev);
  }

  return (
    <div className="discussion-card card">
      <div className="discussion-card-avatar">
        <CircleUserRound size={48} strokeWidth={1}/>
        <div className="post-title-name">
          <span className="post-title">This is a title</span>
          <span>
            by <b>Anthony Flores</b>
          </span>
        </div>
      </div>
      <div className="post-info">
        <div className="views">
          <Eye />
          {views}
        </div>
        <div className={`likes ${liked ? "liked" : ""}`} onClick={handleLike}>
          <Heart fill={liked ? "red" : "transparent"}/>
          {likes}
        </div>
        <div className="replies">
          <MessageCircle />
          {replies}
        </div>
      </div>
    </div>
  );
}

export default DiscussionCard;
