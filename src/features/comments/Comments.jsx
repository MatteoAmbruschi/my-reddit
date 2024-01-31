import styles from "./comments.module.css";
import { loadComments } from "./commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Comments() {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.comments.commentsList);
  const hasError = useSelector((state) => state.comments.hasError);
  const selectedPostId = useSelector((state) => state.posts.selectedPost);

  useEffect(() => {
    dispatch(loadComments({ subreddit: "popular", postId: selectedPostId ? selectedPostId.id : null }));
  }, [dispatch, selectedPostId]);

  if(hasError){
    return <div>Error loading comments!</div>;
  }

  function handleHour(unix){
    let currentTimestamp = Math.floor(Date.now() / 1000);
    let date = new Date(currentTimestamp - unix);

    let hours =  Math.floor(date / 3600) > 0 ? Math.floor(date / 3600) : undefined;
    let minutes = Math.floor((date % 3600) / 60);
    if(hours > 1){
      return `${hours + ':' +  (minutes < 10 ? `0${minutes}` : minutes)} hours ago 🕓`
    }
    else if(hours === 1){
      return `${hours + ':' + (minutes < 10 ? `0${minutes}` : minutes)} hour ago 🕓`
    }
    else if(hours === undefined && minutes > 1){
      return `${minutes} minutes ago 🕓`
    }else{
      return `${minutes} minute ago 🕓`
    }
  }
  const sortedComments = allComments.slice().sort((a, b) => b.created_utc - a.created_utc);

  return (
    <div className={styles.comments}>
      {sortedComments .map((comment) => (
       comment.body ?  
        <div key={comment.id} className={styles.singleMessage}>
           <div className={styles.timeContainer}><h3>{comment.author}</h3><p>{handleHour(comment.created_utc)}</p></div> 
            <p>{comment.body}</p>
        </div>
      : undefined
      ))}
    </div>
  );
}

export default Comments;
