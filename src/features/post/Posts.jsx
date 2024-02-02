import styles from './post.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { postSingle } from './postsSlice';
import { useNavigate } from 'react-router-dom';

function Posts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allPosts = useSelector((state) => state.posts.allPosts)
  
    function handleClickPost(postId) {
      dispatch(postSingle(postId));
      navigate('/post');
    }
    

    //catch time
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

    const sortedposts = allPosts.slice().sort((a, b) => b.created_utc - a.created_utc);
    
    return (
      <div className={styles.postContainer}>
        {sortedposts.map((post) => (
          <div className={styles.scale} key={post.id}>
            <div
              className={styles.container}
              style={{ textDecoration: "none" }}
              onClick={() => handleClickPost(post.id)}
            >
              <div>
                <h1>{post.title.length < 120 ? post.title : post.title.slice(0, 120) + '...'}</h1>
              </div>
                {post.selftext ? <div> <p> {post.selftext.length < 1200 ? post.selftext : post.selftext.slice(0, 1200) + '...'} </p> </div> : null}


                <div className={styles.containerImgPosts}>
                {post.post_hint === "image" ? (
                  <img
                    src={post.url}
                    alt={post.url}
                    className={styles.imgSinglePosts}
                  />
                ) : post.post_hint === "hosted:video" ? (
                  <video
                    controls
                    className={styles.imgSinglePosts}
                  >
                    <source
                      src={post.media.reddit_video.fallback_url}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
                
            </div>
            <div className={styles.infoPosts} onClick={() => handleClickPost(post.id)}>
              <div>Comments: {post.num_comments} 💬 </div>
              <div>Shared: {post.num_crossposts} 📢 </div>
              <div>Score: {post.score} 🎯 </div>
              <div>Type: {post.subreddit} 👀 </div>
              <div>Time: {handleHour(post.created_utc)}</div>
              </div>
          </div>
        ))}
      </div>
    );
  }

export default Posts