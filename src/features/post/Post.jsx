import SideBar from "../sideBar/SideBar";
import styles from "./post.module.css";
import { useSelector, useDispatch } from "react-redux";
/* import { resetPostSingle } from "./postsSlice"; */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Post() {
  const selectedPostId = useSelector((state) => state.posts.selectedPost);
  /*   const dispatch = useDispatch() */
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
    /*     dispatch(resetPostSingle()) */
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostId]);

  function handleHour(unix){
    let unix_timestamp = unix;
    let date = new Date(unix_timestamp * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();
    let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime
  }

  return (
    <div className={styles.singlePostContainer}>
      <SideBar />

      <div className={styles.postContainer}>
        <button
          onClick={() => handleBack()}
          className={styles.backButton}
        >
          Turn Back ↩
        </button>


          {selectedPostId ? (
            //INIZIO POST
            <>
                <div className={`${styles.container} ${styles.singlePost}`}>
              <h1
                style={
                  selectedPostId.title.length < 120
                    ? null
                    : { fontSize: 68, lineHeight: "68px" }
                }
              >
                {selectedPostId.title}
              </h1>
              {selectedPostId.selftext ? (
                <div>
                  <p> {selectedPostId.selftext} </p>
                </div>
              ) : null}

              <div className={styles.containerImg}>
                {selectedPostId.post_hint === "image" ? (
                  <img
                    src={selectedPostId.url}
                    alt={selectedPostId.url}
                    className={styles.imgSinglePost}
                  />
                ) : selectedPostId.post_hint === "hosted:video" ? (
                  <video
                    controls
                    className={styles.imgSinglePost}
                  >
                    <source
                      src={selectedPostId.media.reddit_video.fallback_url}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>

              <p style={{ fontSize: 14, marginTop: '40px' }}>
                questo è il post: {selectedPostId.id}
              </p>
              </div> 

              <div className={styles.infoPosts}>
              <div>Comments: {selectedPostId.num_comments} 💬 </div>
              <div>Shared: {selectedPostId.num_crossposts} 📢 </div>
              <div>Score: {selectedPostId.score} 🎯 </div>
              <div>Type: {selectedPostId.subreddit} 👀 </div>
              <div>Time: {handleHour(selectedPostId.created_utc)} hours ago 🕓 </div>
              </div>
            </>
            //FINE POST

          ) : (
            <div className={`${styles.container} ${styles.singlePost}`}>
              <h1>Try Again :(</h1>
            </div>
          )}
        </div>
      </div>
  );
}

export default Post;
