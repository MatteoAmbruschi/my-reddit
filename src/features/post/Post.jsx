import SideBar from "../sideBar/SideBar";
import styles from "./post.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import BackButton from "../../components/backButton/BackButton";
import Comments from "../comments/Comments";

function Post() {
  const selectedPostId = useSelector((state) => state.posts.selectedPost);
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostId]);

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

  return (
    <div className={styles.singlePostContainer}>
      <SideBar />

      <div className={styles.postContainer}>
        
        <BackButton />

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
              <div>Time: {handleHour(selectedPostId.created_utc)}</div>
              </div>
            </>
            //FINE POST

          ) : (
            <div className={`${styles.container} ${styles.singlePost}`}>
              <h1>Try Again :(</h1>
            </div>
          )}

          <Comments />
        </div>
      </div>
  );
}

export default Post;
