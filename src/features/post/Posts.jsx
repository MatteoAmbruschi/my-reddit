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
    function handeleTile(unix){
      let unix_timestamp = unix;
      let date = new Date(unix_timestamp * 1000);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
      return formattedTime
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
                <h1>{post.title}</h1>
              </div>
              <div>
                <p>{post.selftext}</p>
              </div>
            </div>
            <div className={styles.infoPosts} onClick={() => handleClickPost(post.id)}>
              Comments: {post.num_comments} | 
              Shared: {post.num_crossposts} | 
              Score: {post.score} | 
              Time: {handeleTile(post.created_utc)} hours ago
             {/*  Image: <img src={post.url} alt={post.url} /> */}
              </div>
          </div>
        ))}
      </div>
    );
  }

export default Posts