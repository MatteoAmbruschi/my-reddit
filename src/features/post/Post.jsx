import SideBar from "../sideBar/SideBar";
import styles from './post.module.css';
import { useSelector } from 'react-redux';

function Post() {
  const selectedPostId = useSelector(state => state.posts.selectedPost);

  // Trova il post selezionato utilizzando l'ID salvato nello stato
  console.log("Selected Post ID:", selectedPostId);

  return (
    <div className={styles.singlePostContainer}>
      <SideBar />
      <div className={styles.postContainer}>
        <div style={{ minHeight: '300px' }} className={`${styles.container}`}>
          {selectedPostId ? (
            <>
              <h1>{selectedPostId.title}</h1>
              <p>{selectedPostId.text}</p>
              <p style={{fontSize: 14}}>questo è il post: {selectedPostId.id}</p>
            </>
          ) : (
            <p>Try Again :(</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
