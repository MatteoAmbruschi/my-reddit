import styles from './post.module.css'
import { useDispatch, useSelector } from 'react-redux';

import { postSingle } from './postsSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { loadPosts } from './postsSlice';

function Posts() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const allPosts = useSelector((state) => state.posts.allPosts)
  
    function handleClickPost(postId) {
      dispatch(postSingle(postId));
      navigate('/post');
    }
    
    useEffect(() => {
      dispatch(loadPosts())
      /* console.log(allPosts) */
    }, [dispatch])


    //catch time
    function handleHour(unix){
      let currentTimestamp = Math.floor(Date.now() / 1000);
      let date = new Date(currentTimestamp - unix);

      let hours =  Math.floor(date / 3600) > 0 ? Math.floor(date / 3600) : undefined;
      let minutes = Math.floor((date % 3600) / 60);
      if(hours > 1){
        return `${hours + ':' + minutes} hours ago 🕓`
      }
      else if(hours === 1){
        return `${hours + ':' + minutes} hour ago 🕓`
      }
      else if(hours === undefined && minutes > 1){
        return `${minutes} minutes ago 🕓`
      }else{
        return `${minutes} minute ago 🕓`
      }
    }
  
    return (
      <div className={styles.postContainer}>
        {allPosts.map((post) => (
          <div className={styles.scale} key={post.id}>
            <div
              className={styles.container}
              style={{ textDecoration: "none" }}
              onClick={() => handleClickPost(post.id)}
            >
              <div>
                <h1 style={post.title.length < 120 ? null : {fontSize: 68, lineHeight: '68px'}}>{post.title.length < 160 ? post.title : post.title.slice(0, 160) + '...'}</h1>
              </div>
                {post.selftext ? <div> <p> {post.selftext.length < 1400 ? post.selftext : post.selftext.slice(0, 1400) + '...'} </p> </div> : null}
                
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