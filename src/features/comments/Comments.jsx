import styles from "./comments.module.css";
import { loadComments } from "./commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function Comments() {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.comments.commentsList);
  const selectedPostId = useSelector((state) => state.posts.selectedPost);

  useEffect(() => {
    dispatch(loadComments({ subreddit: "popular", postId: selectedPostId.id }));
  }, [dispatch, selectedPostId]);

  return (
    <div className={styles.comments}>
      {allComments.map((comment) => (
        <div key={comment.id} className={styles.singleMessage}>
            {console.log(comment)}
            {comment.body === undefined ? null : comment.body}
        </div>
      ))}
    </div>
  );
}

export default Comments;
