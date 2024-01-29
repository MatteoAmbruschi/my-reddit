import SideBar from "../sideBar/SideBar";
import styles from './post.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetPostSingle } from "./postsSlice";
import { useNavigate } from 'react-router-dom'

function Post() {
  const selectedPostId = useSelector(state => state.posts.selectedPost);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
    dispatch(resetPostSingle())
  }

  return (
    <div className={styles.singlePostContainer}>
      <SideBar />

      <div className={styles.postContainer}>
        <button onClick={() => handleBack()}>Turn Back ↩</button>

        <div style={{ minHeight: '300px', scale: 'none', cursor: 'auto' }} className={`${styles.container}`}>
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
