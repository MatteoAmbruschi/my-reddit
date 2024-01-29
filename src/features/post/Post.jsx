import SideBar from "../sideBar/SideBar";
import styles from './post.module.css';
import { useSelector, useDispatch } from 'react-redux';
/* import { resetPostSingle } from "./postsSlice"; */
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';


function Post() {
  const selectedPostId = useSelector(state => state.posts.selectedPost);
/*   const dispatch = useDispatch() */
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
/*     dispatch(resetPostSingle()) */
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPostId]);

  return (
    <div className={styles.singlePostContainer}>
      <SideBar />

      <div className={styles.postContainer}>
        
        <button onClick={() => handleBack()} className={styles.backButton}>Turn Back ↩</button>

        <div className={`${styles.container} ${styles.singlePost}`}>
          {selectedPostId ? (
            <>
              <h1>{selectedPostId.title}</h1>
              <p>{selectedPostId.text}</p>
              <p style={{fontSize: 14}}>questo è il post: {selectedPostId.id}</p>
            </>
          ) : (
            <h1>Try Again :(</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
