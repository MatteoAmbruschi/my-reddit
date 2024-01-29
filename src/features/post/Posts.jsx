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
  
    return (
      <div className={styles.postContainer}>
        {allPosts.map((post) => (
          <div className={styles.scale}>
            <div
              className={styles.container}
              style={{ textDecoration: "none" }}
              onClick={() => handleClickPost(post.id)}
              key={post.id}
            >
              <div>
                <h1>{post.title}</h1>
              </div>
              <div>
                <p>{post.text}</p>
              </div>
            </div>
            <div className={styles.infoPosts} onClick={() => handleClickPost(post.id)}>8 hours ago</div>
          </div>
        ))}
      </div>
    );
  }

export default Posts