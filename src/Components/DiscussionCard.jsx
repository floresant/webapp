import { Eye, Heart, MessageCircle } from "lucide-react";
import { useState } from "react";
import "../Styles/DiscussionCard.css";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function DiscussionCard({ image, title, name }) {
  const [likes, setLikes] = useState(getRandomInt(5, 15));
  const [views, setViews] = useState(getRandomInt(20, 50));
  const [replies, setReplies] = useState(getRandomInt(1, 50));
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes((prev) => prev + 1);
    } else {
      setLikes((prev) => prev - 1);
    }
    setLiked((prev) => !prev);
  };

  return (
    <div className="discussion-card card">
      <div className="discussion-card-avatar">
        <img src={image} alt="User" />
        {/* <CircleUserRound size={48} strokeWidth={1} /> */}
        <div className="post-title-name">
          <span className="post-title">{title}</span>
          <span className="post-name">
            by <b>{name}</b>
          </span>
        </div>
      </div>
      <div className="post-info">
        <div className="views">
          <Eye />
          {views}
        </div>
        <div className={`likes ${liked ? "liked" : ""}`} onClick={handleLike}>
          <Heart fill={liked ? "red" : "transparent"} />
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
